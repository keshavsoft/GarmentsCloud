import { ReturnRowPK } from "../../../urlSearchParams.js";

const StartFunc = () => {
    let jVarLocalQrCodeToShow = ReturnRowPK().RowPK;
    let jVarLocalHtmlId = "TableBodyId";
    let jVarLocalTableBodyId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalTr = jVarLocalTableBodyId.querySelector(`tr[data-qrcode="${jVarLocalQrCodeToShow}"]`);
    jVarLocalTr.classList.add("table-success");
};

export { StartFunc };