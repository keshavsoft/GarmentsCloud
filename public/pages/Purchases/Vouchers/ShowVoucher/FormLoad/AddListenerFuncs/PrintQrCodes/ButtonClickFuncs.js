import { StartFunc as StartFuncShowQrCode } from "./ShowQrCode.js";

const StartFunc = () => {
    let jVarLocalPrintQrCodesShowButtonId = document.getElementById("PrintQrCodesShowButtonId");

    jVarLocalPrintQrCodesShowButtonId.addEventListener("click", jFLocalPrintQrCodesShowButtonClickFunc);

};
// PrintQrCodesPrintButtonId
const jFLocalPrintQrCodesShowButtonClickFunc = (params) => {
    let jVarLocalPurchaseQrCodesData = localStorage.getItem("PurchaseQrCodesData");
    let jVarLocalPurchaseQrCodesDataAsJson = JSON.parse(jVarLocalPurchaseQrCodesData);

    StartFuncShowQrCode({ inData: jVarLocalPurchaseQrCodesDataAsJson });
    // console.log("aaaaaaaaaa", jVarLocalPurchaseQrCodesDataAsJson);
};

export { StartFunc }