let StartFunc = () => {
    let jVarLocalSupplierNameId = document.getElementById("SupplierNameId");
    let jVarLocalCityId = document.getElementById("CityId");
    let jVarLocalGSTId = document.getElementById("GSTId");
    let jVarLocalPhoneId= document.getElementById("PhoneId");
    let jVarLocalAliasName= document.getElementById("AliasNameId");

    let jVarLocalReturnData = {};
    jVarLocalReturnData.SupplierName = jVarLocalSupplierNameId.value;
    jVarLocalReturnData.City = jVarLocalCityId.value;
    jVarLocalReturnData.GST = jVarLocalGSTId.value;
    jVarLocalReturnData.Phone = jVarLocalPhoneId.value;
    jVarLocalReturnData.AliasName = jVarLocalAliasName.value;

    return jVarLocalReturnData;
};

export { StartFunc };