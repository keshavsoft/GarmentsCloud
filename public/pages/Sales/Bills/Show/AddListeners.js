import { StartFunc as SaveFuncsStartFunc } from "./ButtonFuncs/InvTable/Footer/SaveFuncs.js";
import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";
import { StartFunc as KeyPressStartFunc } from "./FetchFuncs/KeyPress.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    LocalFooterSaveAssign({ inFolderName, inFileName, inItemName, inProjectName });
    QrCodeKeyPressAssign({ inFolderName, inFileName, inItemName, inProjectName });
};


let LocalFooterSaveAssign = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalInvTableFooterSaveButtonId = document.getElementById("InvTableFooterSaveButtonId");

    if (jVarLocalInvTableFooterSaveButtonId !== null) {
        jVarLocalInvTableFooterSaveButtonId.addEventListener("click", async (event) => {
            let LocalFromSave = await SaveFuncsStartFunc({
                inFolderName, inFileName, inItemName, inProjectName,
                inEvent: event
            });
            
            if (LocalFromSave.KTF) {
                await ShowOnDomStartFunc({
                    inFolderName, inFileName, inItemName, inProjectName,
                    inShowSuccess: true
                });
            }else{
                Swal.fire(LocalFromSave.KReason);
            }
        });
    };

};


let QrCodeKeyPressAssign = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalQrCode = document.getElementById("QrCode");


    jVarLocalQrCode.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let jVarLocalQrCodeValue = jVarLocalQrCode.value
            let Rowpk = parseInt(jVarLocalQrCodeValue.substring(2));

            let jVarLocalCurrentTarget = event.currentTarget;

            await KeyPressStartFunc({
                inFolderName, inFileName, inItemName, inProjectName, inJsonPK: Rowpk
            });
        }
    });
};

export { StartFunc };