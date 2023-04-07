let StartFunc = () => {
    let jVarLocalCustomerName = document.getElementById("CustomerName");
    let jVarLocalCustomerAddress = document.getElementById("CustomerAddress");
    let jVarLocalCustomerMobileNo = document.getElementById("CustomerMobileNo");
    let jVarLocalCustomerDOB = document.getElementById("CustomerDOB");
    let jVarLocalCustomerGender = document.getElementById("CustomerGender");
    let jVarLocalCustomerEmail = document.getElementById("CustomerEmail");
    

    let jVarLocalReturnData = {};
    jVarLocalReturnData.CustomerName = jVarLocalCustomerName.value;
    jVarLocalReturnData.CustomerAddress = jVarLocalCustomerAddress.value;
    jVarLocalReturnData.CustomerMobileNo = jVarLocalCustomerMobileNo.value;
    jVarLocalReturnData.CustomerDOB = jVarLocalCustomerDOB.value;
    jVarLocalReturnData.CustomerGender = jVarLocalCustomerGender.value;
    jVarLocalReturnData.CustomerEmail = jVarLocalCustomerEmail.value;
 


    console.log("jVarLocalReturnData : ", jVarLocalReturnData);
    return jVarLocalReturnData;
};

export { StartFunc };