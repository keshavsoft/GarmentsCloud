import { FromNode } from "../PullData/FetchFuncsQrCode.js";
import { ReturnRowPK } from "../urlSearchParams.js";

import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPullQrCode/TableRow.js";
import { StartFunc as TableHeadStartFunc } from "../FetchFuncs/HtmlPullQrCode/TableHead.js";

let StartFunc = async ({ inProjectName }) => {
    let localurlSearchParams = ReturnRowPK().RowPK;

    let jVarLocalData = await FromNode({
        inProjectName,
        inFolderName: "QrCodes",
        inFileNameOnly: "Generate",
        inItemName: "Barcodes",
        inColumnName: "PurchasePk",
        inValueToCheck: localurlSearchParams
    });

    if (jVarLocalData.KTF) {
        jVarGlobalData = jVarLocalData.JsonData;
        // await ShowOnDom({ localData: jVarLocalData.JsonData });
    };
};


let ShowOnDom = async ({ inData }) => {
    await ShowOnDomTableHeader();
    await ShowOnDomTableBody({ inData });
};

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("TableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTemplate.KTF) {
        var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

        inData.forEach(element => {
            let jVarLocalToShowHtml = template(element);

            jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
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

export { StartFunc ,ShowOnDom};