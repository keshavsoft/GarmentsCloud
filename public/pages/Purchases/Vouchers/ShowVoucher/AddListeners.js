import { StartFunc as SaveFuncsStartFunc } from "./ButtonFuncs/InvTable/Footer/SaveFuncs.js";
import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";
import { StartFunc as StartFuncKeyPressFuncs } from "./Pages/Pricing/KeyPressFuncs.js";
import { AddButtonClickFuncs as AddButtonClickFuncsImageUpload } from "./AddListenersFuncs/ImageUpload.js";
import { StartFunc as StartFuncFromShowDataButtonClickFuncs } from "./AddListenersFuncs/ThirdTabFuncs/ShowDataButtonClickFuncs.js";
//import { StartFunc as StartFuncPrintQrCodes } from "./Pages/PrintQrCodes/ButtonClickFuncs.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalInvTableFooterSaveButtonId = document.getElementById("InvTableFooterSaveButtonId");

    if (jVarLocalInvTableFooterSaveButtonId !== null) {
        jVarLocalInvTableFooterSaveButtonId.addEventListener("click", async (event) => {
            event.preventDefault();

            let LocalFromSave = await SaveFuncsStartFunc({
                inFolderName, inFileName, inItemName, inProjectName,
                inEvent: event
            });

            if (LocalFromSave.KTF) {
                await ShowOnDomStartFunc({
                    inFolderName, inFileName, inItemName, inProjectName,
                    inShowSuccess: true
                });
            };
        });
    };

    StartFuncFromShowDataButtonClickFuncs({ inProjectName });

    StartFuncKeyPressFuncs();
    AddButtonClickFuncsImageUpload();
    // LocalModalButtonForImageClickFuncs();
    LocalDeleteImageFuncs();
   // StartFuncPrintQrCodes();
};

let LocalModalButtonForImageDownloadClick = async (event) => {
    event.preventDefault();

    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;
    let jVarLocalfileUpload = document.getElementById("fileUpload");

    // let jVarLocalFetchUrl = "/JSONApi/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Images/Save";
    let jVarLocalFetchUrl = "/JSONApi/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Images/Show";
    let jVarLocalBodyData = {};

    jVarLocalBodyData.inFolderName = "QrCodes";
    jVarLocalBodyData.inFileNameOnly = "Generate";
    jVarLocalBodyData.inItemName = "Barcodes";
    jVarLocalBodyData.inRowPk = jVarLocalRowPk;

    let jVArLocalHeader = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let jVarFromFetch = await fetch(jVarLocalFetchUrl, jVArLocalHeader);

    if (jVarFromFetch.status === 200) {
        const imageBlob = await jVarFromFetch.blob();

        const imageObjectURL = URL.createObjectURL(imageBlob);

        const image = document.getElementById('ShowImageId')
        image.src = imageObjectURL;
        let jVarLocalShowImageModalLabel = document.getElementById("ShowImageModalLabel");
        jVarLocalShowImageModalLabel.innerHTML = jVarLocalRowPk;
        let jVarLocalShowImageModalDeleteButtonId = document.getElementById("ShowImageModalDeleteButtonId");
        jVarLocalShowImageModalDeleteButtonId.dataset.rowpk = jVarLocalRowPk;
        //rowpk

        const myModalAlternative = new bootstrap.Modal('#ShowImageModal', {
            keyboard: false
        });
        myModalAlternative.show();
    };
};

let LocalDeleteImageFuncs = () => {
    let jVarLocalShowImageModalDeleteButtonId = document.getElementById("ShowImageModalDeleteButtonId");

    if (jVarLocalShowImageModalDeleteButtonId !== null) {
        jVarLocalShowImageModalDeleteButtonId.addEventListener("click", LocalDeleteImageButtonClick);
    };
};

let LocalDeleteImageButtonClick = async (event) => {
    event.preventDefault();

    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;

    // let jVarLocalFetchUrl = "/JSONApi/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Images/Save";
    let jVarLocalFetchUrl = "/JSONApi/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Images/Delete";
    let jVarLocalBodyData = {};

    jVarLocalBodyData.inFolderName = "QrCodes";
    jVarLocalBodyData.inFileNameOnly = "Generate";
    jVarLocalBodyData.inItemName = "Barcodes";
    jVarLocalBodyData.inRowPk = jVarLocalRowPk;

    let jVArLocalHeader = {
        method: "delete",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let jVarFromFetch = await fetch(jVarLocalFetchUrl, jVArLocalHeader);

    let jVarLocalResponse = await jVarFromFetch.json();

    if (jVarLocalResponse.KTF) {
        Swal.fire(`${jVarLocalRowPk} Image Deleted...`);

        var myModal = bootstrap.Modal.getInstance(document.getElementById("ShowImageModal"));

        myModal.hide();
    };
};

export { StartFunc };