let StartFunc = ({ inJSONData }) => {
    let jVarLocalinJSONData = inJSONData;

    let jVarLocalItemsDataList = document.getElementById("ItemsDataList");
    let jVarLocalRateId = document.getElementById("RateId1");

    jVarLocalItemsDataList.value = jVarLocalinJSONData.ProductName
    jVarLocalRateId.value = jVarLocalinJSONData.SalePrice
};


export { StartFunc };