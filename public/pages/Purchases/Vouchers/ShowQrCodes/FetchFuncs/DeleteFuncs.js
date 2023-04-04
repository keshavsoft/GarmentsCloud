let StartFunc = async ({ inFolderName, inFileName, inItemName, inRowPK,MainRowPK, inProjectName }) => {

    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let inFetchPostData = {
            FileName: `${inFileName}.json`,
            FolderName: inFolderName,
            InsertKey: "InvGrid",
            ItemName: inItemName,
            MainRowPK,
            RowPK: inRowPK,
            ScreenName: "Create"
        };

        // let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/Items/FromDataFolder/RowData`;
        let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Row/Delete/FromRowPK`;

        let jVarLocalFetchHeaders = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();

        if (data.KTF === false) {
            LocalReturnObject.KReason = data.KReason;
            return await LocalReturnObject;
        };

        LocalReturnObject.JsonData = data.JsonData;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };