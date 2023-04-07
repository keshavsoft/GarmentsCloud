let StartFunc = () => {
    let jVarLocalCustomerName = document.getElementById("CustomerName");
    let jVarLocalCustomerAddressId = document.getElementById("CustomerAddressId");

    let jVarLocalReturnData = {};
    jVarLocalReturnData.CustomerName = jVarLocalCustomerName.value;
    jVarLocalReturnData.CustomerAddress = jVarLocalCustomerAddressId.value;


    console.log("jVarLocalReturnData : ", jVarLocalReturnData);
    return jVarLocalReturnData;
};

export { StartFunc };