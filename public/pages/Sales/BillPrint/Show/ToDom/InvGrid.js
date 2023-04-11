import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPull/TableRow.js";

let StartFunc = async () => {
    let inData = localStorage.getItem('InventoryData');

    await ShowOnDomTableBody({ inData: JSON.parse(inData) });
};

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("ItemsTableBodyId");
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

export { StartFunc };