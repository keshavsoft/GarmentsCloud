import { StartFunc as StartFuncShowQrCodes } from "./ShowQrCodes.js";
import { StartFunc as StartFuncToModal } from "./ToModal.js";

let StartFunc = ({ inProjectName }) => {
    StartFuncToModal();
    StartFuncShowQrCodes({ inProjectName });
};

export { StartFunc };