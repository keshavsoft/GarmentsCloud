import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPullForGST/TableRow.js";
//  import { StartFunc as TableRowStartFunc } from "../HtmlForGST/ForHbs/TableRow.js";

// import {  } from "../HtmlForGST/ForHbs/TableRow";

let StartFunc = async () => {
    let inData = localStorage.getItem('InventoryData');
    let jVarLocalGroupedData = LocalGroupDataFunc(JSON.parse(inData));
    console.log("jVarLocalGroupedData : ", jVarLocalGroupedData);
    await ShowOnDomTableBody({ inData: JSON.parse(inData) });

    // LocalTotalFunc(inData);
};

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("GstTableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTemplate.KTF) {
        jVarLocalTableBodyId.innerHTML = "";
        var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

        Object.entries(inData).forEach(
            ([key, value]) => {
                value.pk = key;
                value.FK = inData.pk;
                value.SupplierName = inData.SupplierName;
                value.BillNumber = inData.BillNumber;
                value.Date = inData.Date;

                let jVarLocalToShowHtml = template(value);

                jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
            }
        );
    };
};

const groupBy = (arr, groupFn) =>
    arr.reduce(
        (grouped, obj) => ({
            ...grouped,
            [groupFn(obj)]: [...(grouped[groupFn(obj)] || []), obj],
        }),
        {}
    );

let LocalGroupDataFunc = (inData) => {
    let jVarLocalGroupedData = groupBy(inData, (person) => person.GST);
    let jVarLocalReturnArray = [];

    Object.entries(jVarLocalGroupedData).forEach(
        ([key, value]) => {
            let jVarLoopInsideAmount = value.map(element => {
                return element.DisRate;
            });
            const sum = jVarLoopInsideAmount.reduce((a, b) => a + b, 0);

            //console.log("jVarLoopInsideAmount : ", jVarLoopInsideAmount);

            jVarLocalReturnArray.push({
                GST: key,
                Amount: sum
            });
        }
    );
    return jVarLocalReturnArray;
};

export { StartFunc };