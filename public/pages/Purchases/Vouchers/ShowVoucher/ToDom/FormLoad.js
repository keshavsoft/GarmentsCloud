import { StartFunc as TableHeadStartFunc } from "../FetchFuncs/HtmlPull/TableHead.js";
import { StartFunc as TableFootStartFunc } from "../FetchFuncs/HtmlPull/TableFoot.js";
import { StartFunc as ItemsStartFunc } from "../Items/ShowOnDom.js";
import { StartFunc as StartFuncAddToModals } from "./ShowModals.js";
import { ReturnRowPK as ReturnRowPKurlSearchParams } from "../urlSearchParams.js";

let StartFunc = async ({ inProjectName }) => {
    StartFuncAddToModals();

    document.querySelector('#fileUpload').addEventListener('change', (event) => {
        jFShowImage(event);
    });

    await ShowOnDomTableHeader();
    await ShowOnDomTableFooter({ inProjectName });

    LocalShowTabFuncFromurlSearchParams();
};

let LocalShowTabFuncFromurlSearchParams = () => {
    let jVarLocalFromurlSearchParams = ReturnRowPKurlSearchParams();

    if ("ForUpload" in jVarLocalFromurlSearchParams) {
        if (jVarLocalFromurlSearchParams.ForUpload) {
            let jVarLocalSecondTabNextButtonId = document.getElementById("SecondTabNextButtonId");
            jVarLocalSecondTabNextButtonId.click();
            console.log("jVarLocalSecondTabNextButtonId ; ", jVarLocalSecondTabNextButtonId);
        };
    };
};

let ShowOnDomTableHeader = async () => {
    let jVarLocalTableHeadId = document.getElementById("InvTableHeadId");

    let jVarLocalHeadHtml = await TableHeadStartFunc();

    if (jVarLocalHeadHtml.KTF) {
        if ((jVarLocalTableHeadId === null) === false) {
            jVarLocalTableHeadId.innerHTML = jVarLocalHeadHtml.HtmlString;

        };
    };
};

let ShowOnDomTableFooter = async ({ inProjectName }) => {
    let jVarLocalTableHeadId = document.getElementById("InvTableFooterId");

    let jVarLocalHeadHtml = await TableFootStartFunc();

    if (jVarLocalHeadHtml.KTF) {
        if ((jVarLocalTableHeadId === null) === false) {
            jVarLocalTableHeadId.innerHTML = jVarLocalHeadHtml.HtmlString;
        };

        await ItemsStartFunc({ inProjectName });

        if (document.getElementById('ItemsDataListId')) {
            var element = document.getElementById('ItemsDataListId');
            const example = new Choices(element);
        };
    };
};

let jFShowImage = (inEvent) => {
    let jVarLocalInput = inEvent.currentTarget;
    const image = document.getElementById('QrCodeModalImageId');

    image.src = (window.URL ? URL : webkitURL).createObjectURL(jVarLocalInput.files[0]);
};


export { StartFunc };