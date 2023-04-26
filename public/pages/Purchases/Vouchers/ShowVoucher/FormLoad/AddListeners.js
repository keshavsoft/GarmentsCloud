import { StartFunc as StartFuncPrintQrCodes } from "./AddListenerFuncs/PrintQrCodes/ButtonClickFuncs.js";
import { StartFunc as StartFuncPrintButtonClickFunc } from "./AddListenerFuncs/PrintQrCodes/PrintButtonClickFunc.js";
import { StartFunc as StartFuncPrintQrCodeTabSearchFuncs } from "../AddListenersFuncs/FourthTabFuncs/PrintQrCodeTabSearchFuncs.js";

let StartFunc = ({ inProjectName }) => {
    StartFuncPrintQrCodes();
    StartFuncPrintButtonClickFunc();
    StartFuncPrintQrCodeTabSearchFuncs();
};

export { StartFunc };