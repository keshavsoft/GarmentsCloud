import { StartFunc as PushDataStartFunc } from "./PushData/FetchFuncs.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalUpdateButtonId = document.getElementById("UpdateButtonId");

    jVarLocalUpdateButtonId.addEventListener("click", () => {
        PushDataStartFunc({
            inFolderName,
            inFileName,
            inItemName,
            inProjectName
        });
    });
};

export { StartFunc };