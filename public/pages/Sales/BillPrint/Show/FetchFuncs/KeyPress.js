import { StartFunc as StartFucToFooter } from "../ToDom/ToFooter.js";

let StartFunc = async ({ inProjectName, inJsonPK }) => {
    let inFolderName = "Generate";
    let inFileName = "QrCodes";
    let inItemName = "Barcodes";
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
        let jVarLocalRowPK = inJsonPK;
        //  jVarLocalRowPK = 2;

        let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/Items/FromDataFolder/RowData`;


        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FolderName: inFileName,
                FileNameOnly: inFolderName,
                ItemName: inItemName,
                JsonPk: jVarLocalRowPK,
            })
        };
        console.log("sssssss : ", jVarLocalFetchUrl);

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();

        Object.freeze(data.JsonData)
        // data.JsonData.SalePrice = 80000

        StartFucToFooter({ inJSONData: data.JsonData });

        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };