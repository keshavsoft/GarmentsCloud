import { StartFunc as StartFuncCommonSearchFuncs } from "./CommonSearchFuncs.js";

let StartFunc = () => {

    let jVarLocalPrintQrCodeTabSearchButton = document.getElementById("PrintQrCodeTabSearchButton");

    jVarLocalPrintQrCodeTabSearchButton.addEventListener("click", jFLocalButtonClick)
};
// PrintQrCodeTabSearchButton
const jFLocalButtonClick = (event) => {
    let jVarLocalEvent = event;

    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalPrintQrCodeTabSearch = document.getElementById("PrintQrCodeTabSearch");
    let jVarLocalSearchValue = jVarLocalPrintQrCodeTabSearch.value;

    StartFuncCommonSearchFuncs({ inSearchValue: jVarLocalSearchValue });
};

export { StartFunc };