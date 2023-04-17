let StartFunc = ({ inJSONData }) => {
    let jVarLocalinJSONData = inJSONData;

    let jVarLocalDisPersantage = document.getElementById("DisPersantage");
    let jVarLocalDisRate = document.getElementById("DisRate");

    jVarLocalDisPersantage.value = jVarLocalinJSONData.Discount
    jVarLocalDisRate.value = jVarLocalinJSONData.SalePrice;
};

export { StartFunc };