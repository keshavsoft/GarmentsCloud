//import { StartFunc as ButtonsClickFuncStartFunc } from "./Pages/QrCodes/ButtonsClickFunc.js";
//import { StartFunc as ButtonsClickFuncStartFunc } from "./Pages/QrCodes/ButtonsClickFuncs/ToModal.js";
import { StartFunc as StartFuncQrCodeInput } from "./Inputs/KeyPressFuncs/QrCodeInput.js";
import { StartFunc as StartFuncButtonsClickFuncs } from "./Pages/QrCodes/ButtonsClickFuncs/StartFunc.js";

let StartFunc = ({ inProjectName }) => {
    StartFuncButtonsClickFuncs({ inProjectName });
    StartFuncQrCodeInput();
};

export { StartFunc };