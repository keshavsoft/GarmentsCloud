import { StartFunc as SaveFuncsStartFunc } from "./ButtonFuncs/InvTable/Footer/SaveFuncs.js";
import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";
import { StartFunc as StartFuncKeyPressFuncs } from "./Pages/Pricing/KeyPressFuncs.js";
import { StartFunc as StartFuncShowQrCode } from "./QrCodeGeneration/ToDom/ShowQrCode.js";
import { StartFunc as StartFuncCommonQrandPrint } from "./ToDom/CommonQrandPrint.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalInvTableFooterSaveButtonId = document.getElementById("InvTableFooterSaveButtonId");
    let jVarLocalSowDataID = document.getElementById("SowDataID");

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

    if (jVarLocalSowDataID !== null) {
        jVarLocalSowDataID.addEventListener("click", async (event) => {
            let localDatd = jVarGlobalData;
            await StartFuncShowQrCode({ inData: localDatd });
            LocalModalButtonForImageDownloadFuncs();
        });
    };

    StartFuncKeyPressFuncs();
    LocalModalButtonForImageClickFuncs();
    LocalDeleteImageFuncs();
    localPrintButtonClass();

};

let LocalModalButtonForImageClickFuncs = () => {
    let jVarLocalModalButtonForImageId = document.getElementById("ModalButtonForImageId");

    jVarLocalModalButtonForImageId.addEventListener("click", async (event) => {
        event.preventDefault();

        let jVarLocalCurrentTarget = event.currentTarget;
        console.log("aaaaaaaaaa : ", jVarLocalCurrentTarget.dataset);
        let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;
        var formData = new FormData();
        let jVarLocalfileUpload = document.getElementById("fileUpload");

        let jVarLocalFetchUrl = "/JSONApi/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Images/Save";
        //let jVarLocalFetchUrl = "/JSONApi/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Images/Show";

        formData.append("inFolderName", "QrCodes");
        formData.append("inFileNameOnly", "Generate");
        formData.append("inItemName", "Barcodes");
        formData.append("inRowPk", jVarLocalRowPk);
        formData.append('uploaded_file', jVarLocalfileUpload.files[0]);

        let jVarFromFetch = await fetch(jVarLocalFetchUrl, {
            method: 'POST',
            body: formData
        });

        let data = await jVarFromFetch.json();

        if (data.KTF) {
            jVarLocalfileUpload.value = "";

            Swal.fire('Uploaded successfully...');

            let jVarLocalexampleModal = document.getElementById("exampleModal");
            console.log("jVarLocalexampleModal : ", jVarLocalexampleModal);
            // var myModal = new bootstrap.Modal(jVarLocalexampleModal, {
            //     keyboard: false
            // });
            var myModal = bootstrap.Modal.getInstance(jVarLocalexampleModal);

            console.log("myModal : ", myModal);
            myModal.hide();
        };
    });
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

        console.log("myModal : ", myModal);
        myModal.hide();
    };
};

let localPrintButtonClass = () => {
    let jvarLocalButtonClass = document.getElementsByClassName("PrintSowButtonClass");

    jvarLocalButtonClass.addEventListener("click", StartFuncCommonQrandPrint)

};

export { StartFunc };