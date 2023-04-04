import { StartFunc as SaveFuncsStartFunc } from "./ButtonFuncs/InvTable/Footer/SaveFuncs.js";
import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";
import { StartFunc as StartFuncKeyPressFuncs } from "./Pages/Pricing/KeyPressFuncs.js";
import { StartFunc as StartFuncShowQrCode } from "./QrCodeGeneration/ToDom/ShowQrCode.js";

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
        });
    };

    StartFuncKeyPressFuncs();
    LocalModalButtonForImageClickFuncs();
};

let LocalModalButtonForImageClickFuncs = () => {
    let jVarLocalModalButtonForImageId = document.getElementById("ModalButtonForImageId");
    // let jVarLocalQrCodeModalImageId
    jVarLocalModalButtonForImageId.addEventListener("click", async (event) => {
        event.preventDefault();

        let jVarLocalCurrentTarget = event.currentTarget;
        let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;
        var formData = new FormData();
        let jVarLocalfileUpload = document.getElementById("fileUpload");

        let jVarLocalFetchUrl = "/JSONApi/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Images/Save";
        //  formData.Keshav = "Purna";
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
            var myModal =  bootstrap.Modal.getInstance(jVarLocalexampleModal);

            console.log("myModal : ", myModal);
            myModal.hide();
        };
    });
};

export { StartFunc };