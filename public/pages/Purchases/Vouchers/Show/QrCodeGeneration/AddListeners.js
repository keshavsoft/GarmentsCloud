import { StartFunc as StartFuncToModal } from "./ButtonsClickFuncs/ToModal.js";

let StartFunc = () => {
    let jVarLocalShowQrCodeButtonClass = document.getElementsByClassName("GenerateQrCodeButtonClass");
    
    for (let i = 0; i < jVarLocalShowQrCodeButtonClass.length; i++) {
        jVarLocalShowQrCodeButtonClass[i].addEventListener("click", StartFuncToModal)
    };
};

export { StartFunc };