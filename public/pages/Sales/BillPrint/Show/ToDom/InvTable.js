import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPullForGST/TableRow";

let StartFunc = async () => {
    let inData = window.localStorage.getItem('inventeryData');
    console.log("inData----",inData);
    await ShowOnDomTableBody( inData );
    LocalTotalFunc(inData);
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

let LocalTotalFunc = ( inData ) => {
    let jVarLocalAmountTotal = document.getElementById("ItemId");
    let jVarLocalInvArrayItem = Object.values(inData).map(element => element.Amount);

    jVarLocalAmountTotal.innerHTML = jVarLocalInvArrayItem.reduce((a, b) => a + b, 0);;

};

export { StartFunc };