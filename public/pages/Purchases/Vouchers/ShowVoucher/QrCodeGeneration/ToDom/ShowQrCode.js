import { StartFunc as TableRowStartFunc } from "../../FetchFuncs/HtmlPullQrCode/TableRow.js";
import { StartFunc as TableHeadStartFunc } from "../../FetchFuncs/HtmlPullQrCode/TableHead.js";
import { StartFunc as StartFuncAddListeners } from "../AddListeners.js";

let StartFunc = async ({ inData }) => {
    await ShowOnDomTableHeader();
    await ShowOnDomTableBody({ inData });
    await StartFuncAddListeners();
};

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("TableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTemplate.KTF) {
        var template = Handlebars.compile(jVarLocalTemplate.HtmlString);
        let jVarLocalLoopIndex = 1;

        inData.forEach(element => {
            element.KSNo = jVarLocalLoopIndex;
            let jVarLocalToShowHtml = template(element);

            jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
            jVarLocalLoopIndex += 1;
        });

    };
};

let ShowOnDomTableHeader = async () => {
    let jVarLocalTableHeadId = document.getElementById("TableHeadId");

    let jVarLocalHeadHtml = await TableHeadStartFunc();

    if (jVarLocalHeadHtml.KTF) {
        jVarLocalTableHeadId.innerHTML = jVarLocalHeadHtml.HtmlString;
    };
};

export { StartFunc };