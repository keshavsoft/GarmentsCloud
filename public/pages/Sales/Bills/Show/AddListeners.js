import { StartFunc as SaveFuncsStartFunc } from "./ButtonFuncs/InvTable/Footer/SaveFuncs.js";
import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";
import { StartFunc as KeyPressStartFunc } from "./FetchFuncs/KeyPress.js";
import { StartFunc as DeleteFuncsStartFunc } from "./ButtonFuncs/DeleteFuncs.js";
import { StartFunc as StartFuncinvKeyPressCal } from "./invKeyPressCal.js";
import { ReturnRowPK } from "./urlSearchParams.js";
import { StartFunc as ButtonForImageDownload } from "./ToDom/ButtonForImageDownload.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    LocalFooterSaveAssign({ inFolderName, inFileName, inItemName, inProjectName });
    QrCodeKeyPressAssign({ inFolderName, inFileName, inItemName, inProjectName });
    localButtonDeleteFunc({ inFolderName, inFileName, inItemName, inProjectName });
    StartFuncinvKeyPressCal();
    localprintBurronClickFuncc();
    LocalModalButtonForImageDownloadFuncs();
};

let LocalFooterSaveAssign = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let localRowPK = ReturnRowPK().RowPK;
    let jVarLocalInvTableFooterSaveButtonId = document.getElementById("InvTableFooterSaveButtonId");

    if (jVarLocalInvTableFooterSaveButtonId !== null) {
        jVarLocalInvTableFooterSaveButtonId.addEventListener("click", async (event) => {
            event.preventDefault();
            let LocalFromSave = await SaveFuncsStartFunc({
                inFolderName, inFileName, inItemName, inProjectName,
                inEvent: event
            });

            if (LocalFromSave.KTF) {
                window.location.href = `?RowPK=${localRowPK}&FromSave=true`;
                await ShowOnDomStartFunc({
                    inFolderName, inFileName, inItemName, inProjectName,
                    inShowSuccess: true
                });
            } else {
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

            await KeyPressStartFunc({
                inFolderName, inFileName, inItemName, inProjectName, inJsonPK: Rowpk
            });
        }
    });
};

let localButtonDeleteFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalDeleteButtons = document.getElementsByClassName("DeleteButtonClass");

    for (var i = 0; i < jVarLocalDeleteButtons.length; i++) {
        jVarLocalDeleteButtons[i].addEventListener("click", async (event) => {
            await DeleteFuncsStartFunc({
                inFolderName, inFileName, inItemName, inProjectName,
                inEvent: event
            })
        });
    };

};
let localprintBurronClickFuncc = () => {
    let jvarLocalPrinButtonId = document.getElementById("PrintId");
    jvarLocalPrinButtonId.addEventListener("click", () => {
        let localRowPK = ReturnRowPK().RowPK;
        window.location.href = `/pages/Sales/BillPrint/Show/Show.html?RowPK=${localRowPK}`;

    })
};

let LocalModalButtonForImageDownloadFuncs = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("ShowImageButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", ButtonForImageDownload)
    };
};


export { StartFunc };