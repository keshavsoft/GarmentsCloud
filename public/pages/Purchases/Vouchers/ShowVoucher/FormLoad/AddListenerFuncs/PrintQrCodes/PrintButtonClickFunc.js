const StartFunc = () => {
    let jVarLocalPrintQrCodesPrintButtonId = document.getElementById("PrintQrCodesPrintButtonId");

    jVarLocalPrintQrCodesPrintButtonId.addEventListener("click", jFLocalPrintQrCodesShowButtonClickFunc);
};
// 
const jFLocalPrintQrCodesShowButtonClickFunc = (params) => {
    let jVarLocalPrintQrCodesTableBodyId = document.getElementById("PrintQrCodesTableBodyId");
    let jVarLocalSelected = jVarLocalPrintQrCodesTableBodyId.querySelectorAll(".form-check-input:checked");

    for (let i = 0; i < jVarLocalSelected.length; i++) {
        console.log("pppppppppppp : ", jVarLocalSelected[i]);
    };

};

// ModalBodyForQrCodeMultiple

export { StartFunc }