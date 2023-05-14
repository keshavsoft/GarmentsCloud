import { FromNode as FromNodeFetchFuncsQrCodes } from "../../../../PullData/FetchFuncsQrCodes.js";
import { StartFunc as StartFuncShowOtherQrCodes } from "../../../../ToDom/ShowOtherQrCodes.js";
import { StartFunc as StartFuncChangeRowColour } from "../../../../ToDom/PurchaseTabs/PurchaseQrCodesTab/ChangeRowColour.js";

let StartFunc = ({ inProjectName }) => {
    let ShowOtherQrCodesButtonId = document.getElementById("ShowOtherQrCodesButtonId");

    ShowOtherQrCodesButtonId.addEventListener("click", async () => {
        jVarLocalButtonClickFunc({ inProjectName });
    });
};

let jVarLocalButtonClickFunc = async ({ inProjectName }) => {
    let jVarLocalPurchasePk = document.getElementById("PurchasePkId");

    let jVarFromStartFuncFromShowQrCode = await FromNodeFetchFuncsQrCodes({
        inProjectName,
        inValueToCheck: jVarLocalPurchasePk.innerHTML
    });

    if (jVarFromStartFuncFromShowQrCode.KTF) {
        await StartFuncShowOtherQrCodes({ inData: jVarFromStartFuncFromShowQrCode.JsonData });
        StartFuncChangeRowColour();
    };

};

export { StartFunc };