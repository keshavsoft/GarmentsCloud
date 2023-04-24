import { StartFunc as StartFucToFooter } from "../ToDom/ToFooter.js";
import { StartFunc as StartFuncDiscount } from "../ToDom/ProductDetails/Table/Footer/Discount.js";

let StartFunc2 = async ({ inProjectName, inJsonPK }) => {
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

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();

        Object.freeze(data.JsonData)

        StartFucToFooter({ inJSONData: data.JsonData });

        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

let StartFunc = async ({ inProjectName, inJsonPK }) => {
    let jVarLocalQrCodeData = await jFLocalFetchQrCodeData({ inProjectName, inJsonPK });

    StartFucToFooter({ inJSONData: jVarLocalQrCodeData.JsonData });

    let jVarLocalDiscountData = await jFLocalFetchQrDiscountData({ inProjectName, inRowPK: inJsonPK });

    if (jVarLocalDiscountData.KTF) {
        let jVarLocalMaxPk = jFLocalLatestDiscount({ inDiscountArray: jVarLocalDiscountData.JsonData });
        
        StartFuncDiscount({ inJSONData: jVarLocalDiscountData.JsonData[jVarLocalMaxPk] });
    };
};

const jFLocalLatestDiscount = ({ inDiscountArray }) => {
    let jVarLocalKeys = Object.keys(inDiscountArray);
    const numArr = jVarLocalKeys.map((item) => parseInt(item, 0));
    const max = Math.max(...numArr);

    return max;
};

let jFLocalFetchQrCodeData = async ({ inProjectName, inJsonPK }) => {
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

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();

        // Object.freeze(data.JsonData);
        LocalReturnObject.JsonData = data.JsonData;
        Object.freeze(LocalReturnObject.JsonData);
        //  StartFucToFooter({ inJSONData: data.JsonData });

        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

let jFLocalFetchQrDiscountData = async ({ inProjectName, inRowPK }) => {
    let inFolderName = "QrCodes";
    let inFileName = "Discounts";
    let inItemName = "QrCodeWise";

    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
        let jVarLocalRowPK = inRowPK;

        let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByColumn/IsEqual`;

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inFolderName: inFolderName,
                inFileNameOnly: inFileName,
                inItemName: inItemName,
                inColumnName: "QrCode",
                inValueToCheck: jVarLocalRowPK
            })
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();

        LocalReturnObject.JsonData = data.JsonData;
        LocalReturnObject.KTF = true;

        Object.freeze(LocalReturnObject.JsonData);
        //  StartFucToFooter({ inJSONData: data.JsonData });

        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

let StartFunc1 = async ({ inProjectName, inJsonPK }) => {
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

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();

        Object.freeze(data.JsonData)

        StartFucToFooter({ inJSONData: data.JsonData });

        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };