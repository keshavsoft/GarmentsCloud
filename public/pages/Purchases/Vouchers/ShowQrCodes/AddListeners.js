import { StartFunc as SaveFuncsStartFunc } from "./ButtonFuncs/InvTable/Footer/SaveFuncs.js";
// import { StartFunc as StartFuncKeyPressFuncs } from "./Pages/Pricing/KeyPressFuncs.js";
import { StartFunc as StartFuncDeleteFuncs } from "./ButtonFuncsForDelete/DeleteFuncs.js";
import { StartFunc as StartFuncQrCodeGeneration } from "./Pages/QrCodeGeneration/ButtonClicks.js";

import { StartFunc as StartFuncKeyPressFuncs } from "./Pages/ProductsTab/KeyPressFuncs.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    LocalDeleteButtonClassAddFuncs({ inFolderName, inFileName, inItemName, inProjectName });
    LocalInvTableFooterSaveButtonIdAddFuncs({ inFolderName, inFileName, inItemName, inProjectName });

    StartFuncKeyPressFuncs();
    StartFuncQrCodeGeneration();
};

let LocalDeleteButtonClassAddFuncs = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalDeleteButtons = document.getElementsByClassName("DeleteButtonClass");

    for (var i = 0; i < jVarLocalDeleteButtons.length; i++) {
        jVarLocalDeleteButtons[i].addEventListener("click", async (event) => {
            await StartFuncDeleteFuncs({
                inFolderName, inFileName, inItemName, inProjectName,
                inEvent: event
            })
        });
    };

};

let LocalInvTableFooterSaveButtonIdAddFuncs = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalInvTableFooterSaveButtonId = document.getElementById("InvTableFooterSaveButtonId");

    if (jVarLocalInvTableFooterSaveButtonId !== null) {
        jVarLocalInvTableFooterSaveButtonId.addEventListener("click", async (event) => {
            let LocalFromSave = await SaveFuncsStartFunc({
                inFolderName, inFileName, inItemName, inProjectName,
                inEvent: event
            });

            if (LocalFromSave.KTF) {
                window.location.href += "&FromSave=true";
                // await ShowOnDomStartFunc({
                //     inFolderName, inFileName, inItemName, inProjectName,
                //     inShowSuccess: true
                // });

            };
        });
    };

};


export { StartFunc };