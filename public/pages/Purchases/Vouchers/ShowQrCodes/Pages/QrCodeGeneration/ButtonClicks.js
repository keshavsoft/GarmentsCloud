import { StartFunc as StartFuncGenerateQrCode } from "../../../../Common/GenerateQrCode.js";
import { ReturnRowPK } from "../../urlSearchParams.js";

let StartFunc = () => {
    let jVarLocalQrCodeGenerateId = document.getElementById("QrCodeGenerateId");
    jVarLocalQrCodeGenerateId.addEventListener("click", (event) => {
        event.preventDefault();

        let jVarLocalRowPk = ReturnRowPK().RowPK;

        StartFuncGenerateQrCode({ inRowPK: jVarLocalRowPk });
    });
};

export { StartFunc };