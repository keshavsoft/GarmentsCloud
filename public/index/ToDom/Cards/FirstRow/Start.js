let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalHtmlId = "QrCodesCardId";
    let jVarLocalQrCodesCardId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalH5 = jVarLocalQrCodesCardId.querySelector("h5");
    jVarLocalH5.innerHTML = "16";
};

export { StartFunc };