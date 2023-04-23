import { StartFunc as StartFuncTableRow } from "../../../FetchFuncs/ForPrintQrCodes/TableRow.js";

let StartFunc = async ({ inData }) => {
    await ShowOnDomTableBody({ inData });
};

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalPrintQrCodesTableBodyId = document.getElementById("PrintQrCodesTableBodyId");

    let jVarLocalLoopIndex = 1;

    let jVarLocalTemplate = await StartFuncTableRow();
    var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

    inData.forEach(element => {
        element.KSNo = jVarLocalLoopIndex;
        let jVarLocalToShowHtml = template(element);

        jVarLocalPrintQrCodesTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
        jVarLocalLoopIndex += 1;
    });


    // let jVarLocalTemplate = await TableRowStartFunc();

    // if (jVarLocalTemplate.KTF) {
    //     var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

    // };

};

export { StartFunc };