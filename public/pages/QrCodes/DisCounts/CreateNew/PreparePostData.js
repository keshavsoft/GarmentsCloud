let StartFunc = () => {
    let jVarLocalQrCodeID = document.getElementById("QrCodeID");
    let jVarLocalDateTimeEnteredID = document.getElementById("DateTimeEnteredID");
    let jVarLocalUserNameEnteredID = document.getElementById("UserNameEnteredID");
    let jVarLocalDiscountID = document.getElementById("DiscountID");
    let jVarLocaleditDeschiption = document.getElementById("edit-deschiption").querySelector("p");
    let jVarLocalDiscountRsID = document.getElementById("DiscountRsID");

    let jVarLocalReturnData = {};

    if (jVarLocalQrCodeID !== null) {
        jVarLocalReturnData.QrCode = parseInt(jVarLocalQrCodeID.value);
    };

    if (jVarLocalDateTimeEnteredID !== null) {
        jVarLocalReturnData.DateTimeEntered = jVarLocalDateTimeEnteredID.value;
    };

    if (jVarLocalUserNameEnteredID !== null) {
        jVarLocalReturnData.UserNameEntered = jVarLocalUserNameEnteredID.value;
    };

    if (jVarLocalDiscountID !== null) {
        jVarLocalReturnData.DiscountPer = parseInt(jVarLocalDiscountID.value);
    };

    if (jVarLocaleditDeschiption !== null) {
        jVarLocalReturnData.UserDescription = jVarLocaleditDeschiption.innerHTML;
    };

    if (jVarLocalDiscountRsID !== null) {
        jVarLocalReturnData.DiscountRs = parseInt(jVarLocalDiscountRsID.value);
    };

    return jVarLocalReturnData;
};


export { StartFunc };