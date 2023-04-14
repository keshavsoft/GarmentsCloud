import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPullForGST/TableRow.js";
//  import { StartFunc as TableRowStartFunc } from "../HtmlForGST/ForHbs/TableRow.js";

// import {  } from "../HtmlForGST/ForHbs/TableRow";

let StartFunc = async () => {
    let inData = localStorage.getItem('InventoryData');
    let jVarLocalGroupedData = LocalGroupDataFunc(JSON.parse(inData));
    await ShowOnDomTableBody({ inData: jVarLocalGroupedData });

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
    let jvarLocalPrintRate = document.getElementById("PrintRateId");
    let jvarLocalPrintDiscount = document.getElementById("PrintDiscountId");
    let jvarLocalPrintNetAmount = document.getElementById("PrintNetAmountId");
    let jVarLocalGroupedData = groupBy(inData, (person) => person.GST);
    console.log("jVarLocalGroupedData:", jVarLocalGroupedData);
    let jVarLocalReturnArray = [];

    Object.entries(jVarLocalGroupedData).forEach(
        ([key, value]) => {
            let jVarLoopInsideAmount = value.map(element => {
                return element.GrossAmout;
            });
            let jVarLoopInsideRate = value.map(element => {
                console.log("element", element);
                return element.UnitRate;
            });

            let jVarLoopInsideDiscount = value.map(element => {
                console.log("element", element);
                return element.DisRate;
            });

            let jVarLoopInsideGrossAmout = value.map(element => {
                console.log("element", element);
                return element.GrossAmout;
            });

            const sum = jVarLoopInsideAmount.reduce((a, b) => a + b, 0);
            const localUnitRate = jVarLoopInsideRate.reduce((a, b) => a + b, 0);
            const localdiscount = jVarLoopInsideDiscount.reduce((a, b) => a + b, 0);
            const localUnitNetAmout = jVarLoopInsideGrossAmout.reduce((a, b) => a + b, 0);
            
            jvarLocalPrintRate.innerHTML = localUnitRate;
            jvarLocalPrintDiscount.innerHTML = localdiscount;
            jvarLocalPrintNetAmount.innerHTML = localUnitNetAmout;

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