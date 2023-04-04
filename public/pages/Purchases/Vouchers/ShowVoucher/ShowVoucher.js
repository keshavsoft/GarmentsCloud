import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";
import { StartFunc as AddListenersStartFunc } from "./AddListeners.js";
import { ConfigObject } from "../../../ApiConfig.js";
import { KeysObject } from "../ConfigKeys.js";
import { StartFunc as FormLoadStartFunc } from "./ToDom/FormLoad.js";
import { StartFunc as StartFuncShowQrCode } from "./ToDom/ShowQrCode.js";

let jVarCommonKToken = ConfigObject.TokenName;
let jVarLocalStorageKeyName = ConfigObject.LocalStorageKeyName;
let jVarCommonKeys = KeysObject.CommonKeys;
let jVarCommonProjectName = ConfigObject.ProjectName;

let jVarLocalQrCodeModalFuncs = () => {
    const exampleModal = document.getElementById('exampleModal')
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

            modalTitle.textContent = `QrCode : ${recipient}`
            //  modalBodyInput.value = recipient
        })
    };
};

let jFShowImage = (inEvent) => {
    let jVarLocalInput = inEvent.currentTarget;
    const image = document.getElementById('QrCodeModalImageId');

    image.src = (window.URL ? URL : webkitURL).createObjectURL(jVarLocalInput.files[0]);
};

let jFStartFunc = async () => {
    jVarLocalQrCodeModalFuncs();

    document.querySelector('#fileUpload').addEventListener('change', (event) => {
        jFShowImage(event);
    });

    CheckUserFuncsjFStartFunc({
        inUserKey: jVarLocalStorageKeyName,
        inKTokenKey: jVarCommonKToken
    });

    await FormLoadStartFunc({ inProjectName: jVarCommonProjectName });

    await ShowOnDomStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
    await StartFuncShowQrCode({ inProjectName: jVarCommonProjectName });
};

jFStartFunc().then(() => {
    AddListenersStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
});