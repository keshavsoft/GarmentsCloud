let StartFunc = ({ inJSONData }) => {
    let jVarLocalinJSONData = inJSONData;
    console.log("aaaaaaa : ", jVarLocalinJSONData);
    let jVarLocalItemsDataList = document.getElementById("ItemsDataList");
    let jVarLocalRateId = document.getElementById("RateId1");
    let jVarLocalGrossAmout = document.getElementById("GrossAmout");

    jVarLocalItemsDataList.value = jVarLocalinJSONData.ProductName;
    jVarLocalRateId.value = jVarLocalinJSONData.SalePrice;
    jVarLocalGrossAmout.value = jVarLocalinJSONData.SalePrice;
};


export { StartFunc };