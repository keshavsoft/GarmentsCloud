import { StartFunc as TableHeadStartFunc } from "../FetchFuncs/HtmlPull/TableHead.js";
import { StartFunc as TableFootStartFunc } from "../FetchFuncs/HtmlPull/TableFoot.js";
import { StartFunc as ItemsStartFunc } from "../Items/ShowOnDom.js";

let StartFunc = async ({ inProjectName }) => {
    jVarLocalQrCodeModalFuncs();

    document.querySelector('#fileUpload').addEventListener('change', (event) => {
        jFShowImage(event);
    });

    await ShowOnDomTableHeader();
    await ShowOnDomTableFooter({ inProjectName });
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

let jVarLocalQrCodeModalFuncs = () => {
    const exampleModal = document.getElementById('exampleModal');

    if (exampleModal) {
        exampleModal.addEventListener('show.bs.modal', event => {
            // Button that triggered the modal
            const button = event.relatedTarget
            // Extract info from data-bs-* attributes
            const recipient = button.getAttribute('data-rowpk')
            // If necessary, you could initiate an Ajax request here
            // and then do the updating in a callback.

            // Update the modal's content.
            const modalTitle = exampleModal.querySelector('.modal-title')
            const modalBodyInput = exampleModal.querySelector('.modal-body input')
            let jVarLocalmodalfooter = exampleModal.querySelector(".modal-footer button.ModalButtonForImageClass");
            
            modalTitle.textContent = `QrCode : ${recipient}`;
            jVarLocalmodalfooter.dataset.rowpk = recipient;
        })
    };
};

let jFShowImage = (inEvent) => {
    let jVarLocalInput = inEvent.currentTarget;
    const image = document.getElementById('QrCodeModalImageId');

    image.src = (window.URL ? URL : webkitURL).createObjectURL(jVarLocalInput.files[0]);
};


export { StartFunc };