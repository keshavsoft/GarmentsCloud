import { StartFunc as StartFuncPrintQrCodeTabSearchFuncs } from "./PrintQrCodeTabSearchFuncs.js";
import { StartFunc as StartFuncPrintQrCodeTabSearchButton } from "./PrintQrCodeTabSearchButton.js";

let StartFunc = () => {
    StartFuncPrintQrCodeTabSearchFuncs();
    StartFuncPrintQrCodeTabSearchButton();
};

export { StartFunc };