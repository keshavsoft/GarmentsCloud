import { StartFunc as StartFuncCommonSearchFuncs } from "./CommonSearchFuncs.js";

let StartFunc = () => {
    let jVarLocalPrintQrCodeTabSearch = document.getElementById("PrintQrCodeTabSearch");

    jVarLocalPrintQrCodeTabSearch.addEventListener("keypress", jFLocalKeyPress)
};

const jFLocalKeyPress = (event) => {
    let jVarLocalEvent = event;

    if (jVarLocalEvent.keyCode === 13) {
        jVarLocalEvent.preventDefault();

        let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
        let jVarLocalSearchValue = jVarLocalCurrentTarget.value;

        StartFuncCommonSearchFuncs({ inSearchValue: jVarLocalSearchValue });

        // jFLocalTableSearch({
        //     inTable: jVarlocalPrintQrCodesTableBodyId,
        //     inSearchValue: jVarLocalSearchValue
        // });

    };
};

export { StartFunc };