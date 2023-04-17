import { FromNode as FromNodeFetchFuncsQrCodes } from "../../../../PullData/FetchFuncsQrCodes.js";
import { StartFunc as StartFuncShowOtherQrCodes } from "../../../../ToDom/ShowOtherQrCodes.js";

let StartFunc = ({ inProjectName }) => {
    let ShowOtherQrCodesButtonId = document.getElementById("ShowOtherQrCodesButtonId");

    ShowOtherQrCodesButtonId.addEventListener("click", async () => {
        jVarLocalButtonClickFunc({ inProjectName });
    });
};

let jVarLocalButtonClickFunc = async ({ inProjectName }) => {
    let jVarLocalPurchasePk = document.getElementById("PurchasePkId");
    console.log("jVarLocalPurchasePk : ", jVarLocalPurchasePk);
    let jVarFromStartFuncFromShowQrCode = await FromNodeFetchFuncsQrCodes({
        inProjectName,
        inValueToCheck: jVarLocalPurchasePk.innerHTML
    });
    console.log("jVarFromStartFuncFromShowQrCode : ", jVarFromStartFuncFromShowQrCode);
    if (jVarFromStartFuncFromShowQrCode.KTF) {
        StartFuncShowOtherQrCodes({ inData: jVarFromStartFuncFromShowQrCode.JsonData });
        // await StartFuncShowQrCode({ inData: jVarFromStartFuncFromShowQrCode.JsonData });
        // LocalModalButtonForImageDownloadFuncs();
        // localPrintButtonClass();
    };

};

export { StartFunc };