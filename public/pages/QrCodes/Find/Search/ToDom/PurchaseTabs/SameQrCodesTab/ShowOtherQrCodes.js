import { StartFunc as TableRowStartFunc } from "../../../FetchFuncs/HtmlPullQrCode/SameQrcodes/TableRow.js";
import { StartFunc as TableHeadStartFunc } from "../../../FetchFuncs/HtmlPullQrCode/SameQrcodes/TableHead.js";

let StartFunc = async ({ inData }) => {
    let jVarLocalHtmlId = "InventorySerialId";
    let jVarLocalInventorySerialId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalInventorySerial = jVarLocalInventorySerialId.innerHTML;

    let jVarLocalFilteredData = inData.filter(element => {
        return element.InventorySerial === jVarLocalInventorySerial;
    });

    await ShowOnDomTableHeader();
    await ShowOnDomTableBody({ inData: jVarLocalFilteredData });
};

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalHtmlId = "SameQrCodesTableBodyId";

    let jVarLocalTableBodyId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTableBodyId === null === false) {
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
};

let ShowOnDomTableHeader = async () => {
    let jVarLocalHtmlId = "SameQrCodesTableHeadId";
    let jVarLocalTableHeadId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalHeadHtml = await TableHeadStartFunc();
    if (jVarLocalTableHeadId === null === false) {
        if (jVarLocalHeadHtml.KTF) {
            jVarLocalTableHeadId.innerHTML = jVarLocalHeadHtml.HtmlString;
        };
    };
};

export { StartFunc };