let StartFunc = async (event) => {
    event.preventDefault();

    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;
    let jVarLocalsno = jVarLocalCurrentTarget.dataset.sno;
    let jVarLocalUnitRate = jVarLocalCurrentTarget.dataset.unitrate;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    // let jVarLocalfileUpload = document.getElementById("fileUpload");

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

        let jVarLocalShowItemNameId = document.getElementById("ShowItemNameId");
        jVarLocalShowItemNameId.innerHTML = jVarLocalitemname;

        let jVarLocalShowUnitrate = document.getElementById("ShowUnitrateId");
        jVarLocalShowUnitrate.innerHTML = jVarLocalUnitRate;
        //rowpk

        const myModalAlternative = new bootstrap.Modal('#ShowImageModal', {
            keyboard: false
        });
        myModalAlternative.show();
    };
    if (jVarFromFetch.status === 403) {
        Swal.fire('Images not upload..!')
    };

};

export { StartFunc };