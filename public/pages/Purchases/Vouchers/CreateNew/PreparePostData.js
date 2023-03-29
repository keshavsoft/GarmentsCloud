let StartFunc = () => {
    let jVarLocalSupplierNameSelectId = "SupplierNameSelectId"
    let jVarLocalHtmlSupplierNameSelectId = document.getElementById(jVarLocalSupplierNameSelectId);
    let jVarLocalBillNumberId = document.getElementById("BillNumberId");
    let jVarLocalDateId = document.getElementById("DateId");
    let jVarLocalAliasName = document.getElementById("AliasNameId");
    let jVarLocalReturnData = {};

    if ((jVarLocalHtmlSupplierNameSelectId === null) === false) {
        let jVarLocalSupplierName = jVarLocalHtmlSupplierNameSelectId.name;
        jVarLocalReturnData[jVarLocalSupplierName] = jVarLocalHtmlSupplierNameSelectId.value;
    };

    jVarLocalReturnData.BillNumber = jVarLocalBillNumberId.value;
    jVarLocalReturnData.Date = jVarLocalDateId.value;
    jVarLocalReturnData.AliasName = jVarLocalAliasName.value;

    jVarLocalCommonPrepareObjectAsNumber({
        inData: jVarLocalReturnData,
        inIdName: "TotalAmountId"
    });

    return jVarLocalReturnData;
};

let jVarLocalCommonPrepareObjectAsNumber = ({ inData, inIdName }) => {
    let jVarLocalSupplierNameSelectId = inIdName;
    let jVarLocalHtmlSupplierNameSelectId = document.getElementById(jVarLocalSupplierNameSelectId);

    if ((jVarLocalHtmlSupplierNameSelectId === null) === false) {
        let jVarLocalSupplierName = jVarLocalHtmlSupplierNameSelectId.name;
        inData[jVarLocalSupplierName] = parseInt(jVarLocalHtmlSupplierNameSelectId.value);
    };
};

export { StartFunc };