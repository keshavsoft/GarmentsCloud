import { StartFunc as StartFuncShowQrCode } from "../../QrCodeGeneration/ToDom/ShowQrCode.js";
import { StartFunc as StartFuncCommonQrandPrint } from "../../ToDom/ShowDataOnQrModal.js";
import { StartFunc as StartFuncFromShowQrCode } from "../../ToDom/ShowQrCode.js";

let StartFunc = ({ inProjectName }) => {
    let jVarLocalSowDataID = document.getElementById("SowDataID");

    if (jVarLocalSowDataID !== null) {
        jVarLocalSowDataID.addEventListener("click", async (event) => {
            let jVarFromStartFuncFromShowQrCode = await StartFuncFromShowQrCode({ inProjectName });
            
            if (jVarFromStartFuncFromShowQrCode.KTF) {
                await StartFuncShowQrCode({ inData: jVarFromStartFuncFromShowQrCode.JsonData });
                LocalModalButtonForImageDownloadFuncs();
                localPrintButtonClass();
            };
        });
    };
};

let LocalModalButtonForImageDownloadFuncs = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("ShowImageButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", LocalModalButtonForImageDownloadClick)
    };
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

let localPrintButtonClass = () => {
    let jvarLocalButtonClass = document.getElementsByClassName("PrintShowButtonClass");

    for (let i = 0; i < jvarLocalButtonClass.length; i++) {
        jvarLocalButtonClass[i].addEventListener("click", (inEvent) => {
            let jVarLocalCurrentTarget = inEvent.currentTarget;

            let jVarClosestTr = jVarLocalCurrentTarget.closest("tr");

            let jVarANeeded = jVarClosestTr.querySelector(".ShowQrCodeModalAClass");

            StartFuncCommonQrandPrint({ inbutton: jVarANeeded });
            printJS('ModalBodyorQrCodeOnly', 'html');
        })
    };
};

export { StartFunc };