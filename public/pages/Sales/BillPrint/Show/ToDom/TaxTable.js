import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPullForGST/TableRow.js";
//  import { StartFunc as TableRowStartFunc } from "../HtmlForGST/ForHbs/TableRow.js";

// import {  } from "../HtmlForGST/ForHbs/TableRow";

let StartFunc = async () => {
    let inData = localStorage.getItem('InventoryData');
    let jVarLocalGroupedData = LocalGroupDataFunc(JSON.parse(inData));
    console.log("jVarLocalGroupedData : ", jVarLocalGroupedData);
    ShowOnDomTableBody({ inData: jVarLocalGroupedData });
    // LocalTotalFunc(inData);
    jFLocalShowTaxTotals({ inData: jVarLocalGroupedData });
};

let jFLocalShowTaxTotals = ({ inData }) => {
    jFLocalShowTotalTaxAmount({ inData });
    jFLocalShowTotalAmount({ inData });
};

let jFLocalShowTaxTotals1 = ({ inData }) => {
    let jVarLocalTotalTaxAmountId = document.getElementById("TotalTaxAmountId");

    let jVarLocalGstAmountArray = inData.map(element => {
        return parseFloat(element.GstAmount);
    });

    const jVarLocalAmountSum = jVarLocalGstAmountArray.reduce((a, b) => a + b, 0);

    jVarLocalTotalTaxAmountId.innerHTML = jVarLocalAmountSum;
};

let jFLocalShowTotalTaxAmount = ({ inData }) => {
    let jVarLocalTotalTaxAmountId = document.getElementById("TotalTaxAmountId");

    let jVarLocalGstAmountArray = inData.map(element => {
        return parseFloat(element.GstAmount);
    });

    const jVarLocalAmountSum = jVarLocalGstAmountArray.reduce((a, b) => a + b, 0);

    jVarLocalTotalTaxAmountId.innerHTML = jVarLocalAmountSum;
};

let jFLocalShowTotalAmount = ({ inData }) => {
    let jVarLocalTotalAmountId = document.getElementById("TotalGSTAmountId");

    let jVarLocalGstAmountArray = inData.map(element => {
        return parseFloat(element.Amount);
    });
    
    const jVarLocalAmountSum = jVarLocalGstAmountArray.reduce((a, b) => a + b, 0);

    jVarLocalTotalAmountId.innerHTML = jVarLocalAmountSum;
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

    return jVarLocalWithTaxAmountArray;
};

export { StartFunc };