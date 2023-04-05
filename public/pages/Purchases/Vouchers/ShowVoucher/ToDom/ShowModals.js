import { StartFunc as TableHeadStartFunc } from "../FetchFuncs/HtmlPull/TableHead.js";
import { StartFunc as TableFootStartFunc } from "../FetchFuncs/HtmlPull/TableFoot.js";
import { StartFunc as ItemsStartFunc } from "../Items/ShowOnDom.js";

let StartFunc = async ({ inProjectName }) => {
    jVarLocalQrCodeModalFuncs();
    jVarLocalModalForQrCodeOnlyFuncs();

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


let jVarLocalModalForQrCodeOnlyFuncs = () => {
    const exampleModal = document.getElementById('ModalForQrCodeOnly');

    if (exampleModal) {
        exampleModal.addEventListener('show.bs.modal', event => {
            // Button that triggered the modal
            const button = event.relatedTarget
            // Extract info from data-bs-* attributes
            const recipient = button.getAttribute('data-rowpk')
            console.log("recipient:",recipient);
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


export { StartFunc };