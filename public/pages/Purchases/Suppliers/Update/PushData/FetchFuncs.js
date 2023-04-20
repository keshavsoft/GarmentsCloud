import { StartFunc as PreparePostDataStartFunc } from "../PreparePostData.js";
import { ReturnData } from "../urlSearchParams.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    try {

        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
        let localJsonConfig = { inFolderName, inJsonFileName: `${inFileName}.json` }
        let localItemConfig = { inItemName, inScreenName: "Create" }
        let localinDataToUpdate = PreparePostDataStartFunc();
        let RowPk = ReturnData().RowPK;

        // let inFetchPostData = {
        //     FolderName: inFolderName,
        //     FileNameOnly: inFileName,
        //     ItemName: inItemName,
        //     ScreenName: "Create"
        // };


        // let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/WithChecking/Insert`;
        let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Update`;
        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                JsonConfig: localJsonConfig,
                ItemConfig: localItemConfig,
                inDataToUpdate: localinDataToUpdate,
                pk: RowPk
            })
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();

        LocalAfterSaveFunc({ inFetchPostData: data });

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

let LocalAfterSaveFunc = ({ inFetchPostData }) => {
    console.log("inFetchPostData",inFetchPostData);
    if (inFetchPostData) {
        //argon.showSwal('success-message');
        window.location = "/pages/Purchases/Suppliers/ShowAll/ShowAll.html?FromSave=true";
    } else {
        if ("KReason" in inFetchPostData) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: inFetchPostData.KReason,
                footer: '<a href="">Why do I have this issue?</a>'
            });
        };
    };

};

export { StartFunc };