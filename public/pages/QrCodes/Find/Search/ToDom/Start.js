import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncShowStatus } from "./ShowStatus.js";
// import { StartFunc as StartFuncShowOtherQrCodes } from "./ShowOtherQrCodes.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalPurchasePk = await StartFuncShowOnDom({ inFolderName, inFileName, inItemName, inProjectName });
    StartFuncShowStatus({ inFolderName, inFileName, inItemName, inProjectName });
  
    // StartFuncShowOtherQrCodes({
    //     inValueToCheck: jVarLocalPurchasePk,
    //     inProjectName
    // });

};

export { StartFunc };