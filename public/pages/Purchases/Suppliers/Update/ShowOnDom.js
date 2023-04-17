import { ReturnData } from "./urlSearchParams.js";

let StartFunc = () => {
    let localRwpk = ReturnData().RowPK;
    let localSupplerName = ReturnData().SupplierName;
    let localAliasName = ReturnData().AliasName;
    let localCity = ReturnData().City;
    let localGST = ReturnData().GST;
    let localPhone = ReturnData().Phone;

    let jVarLocalSupplierNameId = document.getElementById("SupplierNameId");
    let jVarLocalCityId = document.getElementById("CityId");
    let jVarLocalGSTId = document.getElementById("GSTId");
    let jVarLocalPhoneId = document.getElementById("PhoneId");
    let jVarLocalAliasName = document.getElementById("AliasNameId");

    jVarLocalSupplierNameId.value = localSupplerName;
    jVarLocalCityId.value = localCity;
    jVarLocalGSTId.value = localGST;
    jVarLocalPhoneId.value = localPhone;
    jVarLocalAliasName.value = localAliasName;

};

export { StartFunc };