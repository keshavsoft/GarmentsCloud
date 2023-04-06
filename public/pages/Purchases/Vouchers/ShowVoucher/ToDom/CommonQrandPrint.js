import { GenerateQrCodeOnModal } from "./ShowModals.js";

let StartFunc = () => {
    console.log("jjjjjjjjjjjjj");
    const exampleModal = document.getElementById('ModalForQrCodeOnly');

    if (exampleModal) {
        exampleModal.addEventListener('show.bs.modal', event => {
            // Button that triggered the modal
            const button = event.relatedTarget
            // Extract info from data-bs-* attributes
            const recipientKSno = button.getAttribute('data-ksno')
            const recipient = button.getAttribute('data-rowpk')
            const jVarLocalproductname = button.getAttribute("data-productname");
            const jVarLocalSalePrice = button.getAttribute("data-saleprice");
            const jVarLocalUserdescription = button.getAttribute("data-Userdescription");
            const jVarLocalpurchasepk = button.getAttribute("data-purchasepk");
            const jVarLocalinventoryserial = button.getAttribute("data-inventoryserial");
            const jVarLocalAliesName= document.getElementById("AliesNameId").innerHTML;

            // Update the modal's content.
            const modalTitle = exampleModal.querySelector('.modal-title')
            const modalBodyInput = exampleModal.querySelector('.modal-body input')
            let jVarLocalmodalfooter = exampleModal.querySelector(".modal-footer button.ModalButtonForImageClass");
            let jVarOnModalQrCodeOnModalId = exampleModal.querySelector('#QrCodeOnModalId');
            let jVarOnModalProductNameModalId = exampleModal.querySelector('#ProductNameModalId');
            let jVarOnModalSalePriceModalModalId = exampleModal.querySelector('#SalePriceModalId');
            let jVarOnModalUserDescriptionModalId = exampleModal.querySelector('#UserDescriptionModalId');

            modalTitle.textContent = `QrCode : ${recipient}`;

            GenerateQrCodeOnModal({
                inQrData: `M-${recipient}/${jVarLocalproductname}/${jVarLocalAliesName}-${jVarLocalpurchasepk}-${jVarLocalinventoryserial}/${jVarLocalSalePrice}`,
                inCanvasId: document.getElementById("CanvasId")
            });
            
            jVarOnModalQrCodeOnModalId.innerHTML = `M-${recipient}`;
            jVarOnModalProductNameModalId.innerHTML = jVarLocalproductname;
            jVarOnModalSalePriceModalModalId.innerHTML = jVarLocalSalePrice;
            jVarOnModalUserDescriptionModalId.innerHTML = `${jVarLocalAliesName}-${jVarLocalpurchasepk}-${jVarLocalinventoryserial}`;

            //  jVarLocalmodalfooter.dataset.rowpk = recipient;
        })
    };
};

export {StartFunc}