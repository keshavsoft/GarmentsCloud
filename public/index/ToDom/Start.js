import { StartFunc as StartFuncFirstRow } from "./Cards/FirstRow/Start.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    StartFuncFirstRow({ inFolderName, inFileName, inItemName, inProjectName }).then();
};

export { StartFunc };