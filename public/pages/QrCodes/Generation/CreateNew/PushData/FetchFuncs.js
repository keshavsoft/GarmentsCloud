import { StartFunc as PreparePostDataStartFunc } from "../PreparePostData.js";
import { StartFunc as getUrlQueryParamsStartFunc } from "../getUrlQueryParams.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    try {
        let inFetchPostData = {
            FolderName: inFolderName,
            FileNameOnly: inFileName,
            ItemName: inItemName,
            ScreenName: "Create"
        };

        inFetchPostData.inPostData = PreparePostDataStartFunc();

        let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/WithChecking/Insert`;

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();

        LocalAfterSaveFunc({ inFetchPostData: data });

        // LocalReturnObject.KTF = true;
        // return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

let LocalAfterSaveFunc = ({ inFetchPostData }) => {
    let jVarLocalFromgetUrlQueryParamsStartFunc = getUrlQueryParamsStartFunc();
    
    if (inFetchPostData.KTF) {
        if ("PurchasePk" in jVarLocalFromgetUrlQueryParamsStartFunc) {
            window.location = `../../../Purchases/Vouchers/ShowProducts/ShowProducts.html?RowPK=${jVarLocalFromgetUrlQueryParamsStartFunc.PurchasePk}`;
        } else {
            window.location = "../ShowAll/ShowAll.html?FromSave=true";
        };
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