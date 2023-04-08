let AddButtonClickFuncs = () => {
    let jVarLocalModalButtonForImageId = document.getElementById("ModalButtonForImageId");

    jVarLocalModalButtonForImageId.addEventListener("click", LocalButtonClickFunc);
};

let LocalButtonClickFunc = async (event) => {
    event.preventDefault();

    let jVarLocalCurrentTarget = event.currentTarget;

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
        LocalPostButtonclick({ inRowPk: jVarLocalRowPk });
    };
};

let LocalPostButtonclick = ({ inRowPk }) => {
   // Swal.fire('Uploaded successfully...');

    let jVarLocalexampleModal = document.getElementById("exampleModal");
    var myModal = bootstrap.Modal.getInstance(jVarLocalexampleModal);
    myModal.hide();

    let jVarLocalTableBodyId = document.getElementById("TableBodyId");
    // let jVarLocalFindPk = jVarLocalTableBodyId.querySelector(`.PrintShowButtonClass-${inRowPk}`);
    jVarLocalFindPk.click();
};

export { AddButtonClickFuncs };