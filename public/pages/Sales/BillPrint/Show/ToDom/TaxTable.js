import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPullForGST/TableRow.js";
//  import { StartFunc as TableRowStartFunc } from "../HtmlForGST/ForHbs/TableRow.js";

// import {  } from "../HtmlForGST/ForHbs/TableRow";

let StartFunc = async () => {
    let inData = localStorage.getItem('InventoryData');
    let jVarLocalGroupedData = LocalGroupDataFunc(JSON.parse(inData));
    console.log("jVarLocalGroupedData : ", jVarLocalGroupedData);

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
                return element.GrossAmout;
            });

            const sum = jVarLoopInsideAmount.reduce((a, b) => a + b, 0);

            jVarLocalReturnArray.push({
                GST: key,
                Amount: sum
            });
        }
    );

    let jVarLocalWithTaxAmountArray = jVarLocalReturnArray.map(element => {
        element.GstAmount = (element.Amount * (element.GST / (100 + element.GST))).toFixed(2);
        return element;
    });
    ShowOnDomTableBody({ inData: jVarLocalWithTaxAmountArray });
    return jVarLocalWithTaxAmountArray;
};

export { StartFunc };