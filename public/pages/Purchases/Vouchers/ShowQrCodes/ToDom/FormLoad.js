import { StartFunc as TableHeadStartFunc } from "../FetchFuncs/HtmlPull/TableHead.js";
import { StartFunc as TableFootStartFunc } from "../FetchFuncs/HtmlPull/TableFoot.js";
import { StartFunc as ItemsStartFunc } from "../Items/ShowOnDom.js";
import { ReturnRowPK } from "../urlSearchParams.js";

let StartFunc = async ({ inProjectName }) => {
    await ShowOnDomTableHeader();
    await ShowOnDomTableFooter({ inProjectName });
    jVarLocalShowProductsTabFunc();
};

let jVarLocalShowProductsTabFunc = () => {
    let jVarLocalFromurlSearchParams = ReturnRowPK();

    if ("FromDelete" in jVarLocalFromurlSearchParams) {
        if (jVarLocalFromurlSearchParams.FromDelete) {
            document.getElementById("FirstBtnNext").click();
        };
    };

    if ("FromSave" in jVarLocalFromurlSearchParams) {
        if (jVarLocalFromurlSearchParams.FromSave === "true") {
            document.getElementById("FirstBtnNext").click();
            
            let jVarLocalItemsDataListId = document.getElementById("QtyId1");
            
            jVarLocalItemsDataListId.focus();
        };
    };
};

let ShowOnDomTableHeader = async () => {
    let jVarLocalTableHeadId = document.getElementById("InvTableHeadId");

    let jVarLocalHeadHtml = await TableHeadStartFunc();

    if (jVarLocalHeadHtml.KTF) {
        jVarLocalTableHeadId.innerHTML = jVarLocalHeadHtml.HtmlString;
    };
};

let ShowOnDomTableFooter = async ({ inProjectName }) => {
    let jVarLocalTableHeadId = document.getElementById("InvTableFooterId");

    let jVarLocalHeadHtml = await TableFootStartFunc();

    if (jVarLocalHeadHtml.KTF) {
        jVarLocalTableHeadId.innerHTML = jVarLocalHeadHtml.HtmlString;
        await ItemsStartFunc({ inProjectName });

        if (document.getElementById('ItemsDataListId')) {
            var element = document.getElementById('ItemsDataListId');
            const example = new Choices(element);
        };
    };
};

export { StartFunc };