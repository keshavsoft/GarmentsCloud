import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPull/TableRow.js";

let StartFunc = async ({ inData }) => {
    await ShowOnDomTableBody({ inData });
    LocalTotalFunc({ inData })
};

let LocalTotalFunc = ({ inData }) => {
    let jVarLocalInvArrayNeeded = Object.values(inData.InvGrid).map(element => element.Qty);

    let jVarLocalItemsQtyTotal = document.getElementById("ItemsQtyTotal");
    jVarLocalItemsQtyTotal.innerHTML = jVarLocalInvArrayNeeded.reduce((a, b) => a + b, 0);;

    let jVarLocalInvArrayAmount = Object.values(inData.InvGrid).map(element => element.Amount);
    
    let jVarLocalAmountTotal = document.getElementById("AmountTotal");
    jVarLocalAmountTotal.innerHTML = jVarLocalInvArrayAmount.reduce((a, b) => a + b, 0);;

    let jVarLocalInvArrayRate = Object.values(inData.InvGrid).map(element => element.UnitRate);

    let jVarLocalRateTotal = document.getElementById("rateTotal");
    jVarLocalRateTotal.innerHTML = jVarLocalInvArrayRate.reduce((a, b) => a + b, 0);;

    let jVarLocalInvArrayMRP = Object.values(inData.InvGrid).map(element => element.MRP);

    let jVarLocalMRPTotal = document.getElementById("MRPTotal");
    jVarLocalMRPTotal.innerHTML = jVarLocalInvArrayMRP.reduce((a, b) => a + b, 0);;

};

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("InvTableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTemplate.KTF) {
        jVarLocalTableBodyId.innerHTML = "";
        var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

        Object.entries(inData.InvGrid).forEach(
            ([key, value]) => {
                value.pk = key;
                value.FK = inData.pk;
                value.SupplierName = inData.SupplierName;
                value.AliasName = inData.AliasName;
                value.BillNumber = inData.BillNumber;
                value.Date = inData.Date;

                let jVarLocalToShowHtml = template(value);

                jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
            }
        );
    };
};

export { StartFunc };