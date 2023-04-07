let StartFunc = () => {
    let jVarLocalCustomerName = document.getElementById("CustomerName");
    let jVarLocalGSTId = document.getElementById("GSTId");

    let jVarLocalReturnData = {};
    jVarLocalReturnData.CustomerName = jVarLocalCustomerName.value;
    jVarLocalReturnData.GST = jVarLocalGSTId.value;


    console.log("jVarLocalReturnData : ", jVarLocalReturnData);
    return jVarLocalReturnData;
};

export { StartFunc };