let StartFunc = () => {
    let jVarLocalSupplierNameSelectId = "SupplierNameSelectId"
    let jVarLocalHtmlSupplierNameSelectId = document.getElementById(jVarLocalSupplierNameSelectId);
    let jVarLocalBillNumberId = document.getElementById("BillNumberId");
    let jVarLocalDateId = document.getElementById("DateId");
    let jVarLocalReturnData = {};

    if ((jVarLocalHtmlSupplierNameSelectId === null) === false) {
        let jVarLocalSupplierName = jVarLocalHtmlSupplierNameSelectId.name;
        jVarLocalReturnData[jVarLocalSupplierName] = jVarLocalHtmlSupplierNameSelectId.value;
    };

    jVarLocalReturnData.BillNumber = jVarLocalBillNumberId.value;
    jVarLocalReturnData.Date = jVarLocalDateId.value;

    jVarLocalCommonPrepareObjectAsNumber({
        inData: jVarLocalReturnData,
        inIdName: "TotalAmountId"
    });

    jVarLocalCustomerName({
        inData: jVarLocalReturnData,
        inIdName: "CustomerNameId"
    });

    jVarLocalCustomerNumber({
        inData: jVarLocalReturnData,
        inIdName: "ContactNumberId"
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

let jVarLocalCustomerName = ({ inData, inIdName }) => {
    let jVarLocalSupplierNameSelectId = inIdName;
    let jVarLocalHtmlSupplierNameSelectId = document.getElementById(jVarLocalSupplierNameSelectId);

    if ((jVarLocalHtmlSupplierNameSelectId === null) === false) {
        let jVarLocalSupplierName = jVarLocalHtmlSupplierNameSelectId.name;
        inData[jVarLocalSupplierName] = jVarLocalHtmlSupplierNameSelectId.value;
    };
};

let jVarLocalCustomerNumber = ({ inData, inIdName }) => {
    let jVarLocalSupplierNameSelectId = inIdName;
    let jVarLocalHtmlSupplierNameSelectId = document.getElementById(jVarLocalSupplierNameSelectId);

    if ((jVarLocalHtmlSupplierNameSelectId === null) === false) {
        let jVarLocalSupplierName = jVarLocalHtmlSupplierNameSelectId.name;
        inData[jVarLocalSupplierName] = jVarLocalHtmlSupplierNameSelectId.value;
    };
};

export { StartFunc };