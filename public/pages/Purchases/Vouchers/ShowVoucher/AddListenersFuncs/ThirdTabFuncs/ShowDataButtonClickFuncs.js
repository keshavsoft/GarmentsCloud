import { StartFunc as StartFuncShowQrCode } from "../../QrCodeGeneration/ToDom/ShowQrCode.js";
import { StartFunc as StartFuncFromShowQrCode } from "../../ToDom/ShowQrCode.js";
import { StartFuncNoShowModal as StartFuncNoShowModalPrintQrCodes } from "../PrintQrCodes/CommonFuncs.js";

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
    if (jVarFromFetch.status === 403) {
        Swal.fire({
            title: 'Images not upload.!',
            width: 600,
            padding: '3em',
            color: ' #000080',
            background: '#fff url()',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
        })

    };

};

let localPrintButtonClass = () => {
    let jvarLocalButtonClass = document.getElementsByClassName("PrintShowButtonClass");

    for (let i = 0; i < jvarLocalButtonClass.length; i++) {
        jvarLocalButtonClass[i].addEventListener("click", async (inEvent) => {
            let jVarLocalCurrentTarget = inEvent.currentTarget;
            let jVarClosestTr = jVarLocalCurrentTarget.closest("tr");

            let jVarNeeded = jVarClosestTr.querySelector(".ShowQrCodeModalAClass");
            let jVarLocalDataset = jVarNeeded.dataset;

            let jVarLocalToModal = {};
            jVarLocalToModal.QrCode = `M-${jVarLocalDataset.rowpk}`;
            jVarLocalToModal.ProductName = jVarLocalDataset.productname;
            jVarLocalToModal.UserDescription = jVarLocalDataset.userdescription;
            jVarLocalToModal.SalePrice = jVarLocalDataset.saleprice;

            await StartFuncNoShowModalPrintQrCodes({ inDataArray: [jVarLocalToModal] });
            printJS('ModalBodyForQrCodeMultiple', 'html');
        })
    };

    jFLocalShowQrCodeModalAClassFunc();
};

let jFLocalShowQrCodeModalAClassFunc = () => {
    let jvarLocalButtonClass = document.getElementsByClassName("ShowQrCodeModalAClass");

    for (let i = 0; i < jvarLocalButtonClass.length; i++) {
        jvarLocalButtonClass[i].addEventListener("click", (inEvent) => {
            let jVarLocalCurrentTarget = inEvent.currentTarget;
            let jVarLocalDataset = jVarLocalCurrentTarget.dataset;

            let jVarLocalToModal = {};
            jVarLocalToModal.QrCode = `M-${jVarLocalDataset.rowpk}`;
            jVarLocalToModal.ProductName = jVarLocalDataset.productname;
            jVarLocalToModal.UserDescription = jVarLocalDataset.userdescription;
            jVarLocalToModal.SalePrice = jVarLocalDataset.saleprice;

            // data-userdescription="{{QrCode}}/{{ProductName}}/{{UserDescription}}/{{SalePrice}}"

            // StartFuncPrintQrCodes({ inDataArray: [jVarLocalToModal] });

            StartFuncNoShowModalPrintQrCodes({ inDataArray: [jVarLocalToModal] });
            jFLocalShowModal();
        })
    };
};

const jFLocalShowModal = () => {
    let jVarLocalId = "ModalForQrCodeMultiple";

    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

    myModal.show();
};

export { StartFunc };