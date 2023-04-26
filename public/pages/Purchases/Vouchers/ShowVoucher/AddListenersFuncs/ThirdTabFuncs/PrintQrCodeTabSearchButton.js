import { StartFunc as StartFuncCommonSearchFuncs } from "./CommonSearchFuncs.js";

let StartFunc = () => {
    let jVarLocalPrintQrCodeTabSearchButton = document.getElementById("ShowQrCodeTabSearchButton");

    jVarLocalPrintQrCodeTabSearchButton.addEventListener("click", jFLocalButtonClick)
};
// PrintQrCodeTabSearchButton
const jFLocalButtonClick = (event) => {
    let jVarLocalEvent = event;

    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalPrintQrCodeTabSearch = document.getElementById("ShowQrCodeTabSearch");
    let jVarLocalSearchValue = jVarLocalPrintQrCodeTabSearch.value;

    StartFuncCommonSearchFuncs({ inSearchValue: jVarLocalSearchValue });
};

export { StartFunc };