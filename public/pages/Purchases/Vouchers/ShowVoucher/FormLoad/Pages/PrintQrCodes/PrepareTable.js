import { StartFunc as StartFuncTableHead } from "../../../FetchFuncs/ForPrintQrCodes/TableHead.js";

const StartFunc = async (params) => {
    await ShowOnDomTableHeader();
};

let ShowOnDomTableHeader = async () => {
    let jVarLocalTableHeadId = document.getElementById("PrintQrCodesTableHeadId");

    let jVarLocalHeadHtml = await StartFuncTableHead();

    if (jVarLocalHeadHtml.KTF) {
        if ((jVarLocalTableHeadId === null) === false) {
            jVarLocalTableHeadId.innerHTML = jVarLocalHeadHtml.HtmlString;
        };
    };
};

export { StartFunc }