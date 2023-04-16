import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncShowStatus } from "./ShowStatus.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    StartFuncShowOnDom({ inFolderName, inFileName, inItemName, inProjectName });
    StartFuncShowStatus({ inFolderName, inFileName, inItemName, inProjectName });
};

export { StartFunc };