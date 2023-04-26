import { StartFunc as StartFuncPrintQrCodes } from "./AddListenerFuncs/PrintQrCodes/ButtonClickFuncs.js";
import { StartFunc as StartFuncPrintButtonClickFunc } from "./AddListenerFuncs/PrintQrCodes/PrintButtonClickFunc.js";
import { StartFunc as StartFuncPrintQrCodeTabSearchFuncs } from "../AddListenersFuncs/FourthTabFuncs/PrintQrCodeTabSearchFuncs.js";
import { StartFunc as StartFuncPrintQrCodesCheckAllKeyPressFuncs } from "../AddListenersFuncs/FourthTabFuncs/PrintQrCodesCheckAllKeyPressFuncs.js";
import { StartFunc as StartFuncPrintQrCodeTabSearchButton } from "../AddListenersFuncs/FourthTabFuncs/PrintQrCodeTabSearchButton.js";

let StartFunc = ({ inProjectName }) => {
    StartFuncPrintQrCodes();
    StartFuncPrintButtonClickFunc();
    StartFuncPrintQrCodeTabSearchFuncs();
    StartFuncPrintQrCodesCheckAllKeyPressFuncs();
    StartFuncPrintQrCodeTabSearchButton();
};

export { StartFunc };