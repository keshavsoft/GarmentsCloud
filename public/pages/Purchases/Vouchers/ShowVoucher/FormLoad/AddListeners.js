import { StartFunc as StartFuncPrintQrCodes } from "./AddListenerFuncs/PrintQrCodes/ButtonClickFuncs.js";
import { StartFunc as StartFuncPrintButtonClickFunc } from "./AddListenerFuncs/PrintQrCodes/PrintButtonClickFunc.js";

let StartFunc = ({ inProjectName }) => {
    StartFuncPrintQrCodes();
    StartFuncPrintButtonClickFunc();
};

export { StartFunc };