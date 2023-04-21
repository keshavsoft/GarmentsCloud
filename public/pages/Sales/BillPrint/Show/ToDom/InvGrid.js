import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPull/TableRow.js";
import { StartFunc as StartFuncInventoryTotals } from "./InventoryTotals/ShowOnDom.js";

let StartFunc = async () => {
    let inData = localStorage.getItem('InventoryData');

    await ShowOnDomTableBody({ inData: JSON.parse(inData) });
    await StartFuncInventoryTotals();
};

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("ItemsTableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTableBodyId === null === false) {
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
};

export { StartFunc };