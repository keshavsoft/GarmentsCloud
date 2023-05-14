import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncShowStatus } from "./ShowStatus.js";
// import { StartFunc as StartFuncShowOtherQrCodes } from "./ShowOtherQrCodes.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    StartFuncShowOnDom({ inFolderName, inFileName, inItemName, inProjectName }).then();

    StartFuncShowStatus({ inFolderName, inFileName, inItemName, inProjectName }).then();
};

export { StartFunc };