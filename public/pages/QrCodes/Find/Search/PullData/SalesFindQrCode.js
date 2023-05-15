let FromNode = async ({ inRowPK, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
        
        let inFetchPostData = {
            inFileNameOnly: "Bills",
            inFolderName: "Sales",
            inItemName: "BillsQrCode",
            inColumnName: "pk",
            inValueToCheck: inRowPK
        };

        let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByColumn/IsEqual`;
        //http://localhost:4120/JSONApi/API/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK

        // POST http://localhost:4120/JSONApi/

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

export { FromNode };