import { FromNode } from "../PullData/FetchFuncForSales.js";
import { ReturnRowPK } from "../urlSearchParams.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalRowPk = ReturnRowPK();
    
    let jVarLocalData = await FromNode({
        inFolderName,
        inFileName,
        inItemName,
        inRowPK: jVarLocalRowPk.RowPK,
        inProjectName
    });
    if (jVarLocalData.KTF) {
        ShowOnDom();
    };
};

let ShowOnDom = () => {
    let jVarLocalBadgeSoldId = document.getElementById("BadgeSoldId");

    jVarLocalBadgeSoldId.style.display = "";

    let jVarLocalBadgeInStockId = document.getElementById("BadgeInStockId");

    jVarLocalBadgeInStockId.style.display = "none";
};

export { StartFunc };