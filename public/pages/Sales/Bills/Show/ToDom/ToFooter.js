let StartFunc = ({ inJSONData }) => {
    let jVarLocalinJSONData = inJSONData;

    let jVarLocalItemsDataList = document.getElementById("ItemsDataList");
    let jVarLocalRateId = document.getElementById("RateId1");
    let jVarLocalGrossAmout = document.getElementById("GrossAmout");

    jVarLocalItemsDataList.value = "";
    jVarLocalRateId.value = 0;
    jVarLocalGrossAmout.value = 0;

    jVarLocalItemsDataList.value = jVarLocalinJSONData.ProductName;
    jVarLocalRateId.value = jVarLocalinJSONData.SalePrice;
    jVarLocalGrossAmout.value = jVarLocalinJSONData.SalePrice;
};


export { StartFunc };