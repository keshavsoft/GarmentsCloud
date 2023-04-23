import { FromNode } from "../../PullData/FetchFuncsQrCode.js";
import { ReturnRowPK } from "../../urlSearchParams.js";

let StartFunc = async ({ inProjectName }) => {
    let localurlSearchParams = ReturnRowPK().RowPK;

    let jVarLocalData = await FromNode({
        inProjectName,
        inFolderName: "QrCodes",
        inFileNameOnly: "Generate",
        inItemName: "Barcodes",
        inColumnName: "PurchasePk",
        inValueToCheck: localurlSearchParams
    });

    if (jVarLocalData.KTF) {
        localStorage.setItem("PurchaseQrCodesData", JSON.stringify(jVarLocalData.JsonData));
    };
};


export { StartFunc };