//import { StartFunc as ButtonsClickFuncStartFunc } from "./Pages/QrCodes/ButtonsClickFunc.js";
import { StartFunc as ButtonsClickFuncStartFunc } from "./Pages/QrCodes/ButtonsClickFuncs/ToModal.js";
import { StartFunc as StartFuncQrCodeInput } from "./Inputs/KeyPressFuncs/QrCodeInput.js";

let StartFunc = () => {
    ButtonsClickFuncStartFunc();
    StartFuncQrCodeInput();
};

export { StartFunc };