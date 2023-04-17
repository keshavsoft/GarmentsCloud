let StartFunc = ({ inJSONData }) => {
    let jVarLocalinJSONData = inJSONData;

    let jVarLocalDisPersantage = document.getElementById("DisPersantage");
    let jVarLocalDisRate = document.getElementById("DisRate");

    if ("DiscountPer" in jVarLocalinJSONData) {

        jVarLocalDisPersantage.value = jVarLocalinJSONData.DiscountPer;

    };
    jVarLocalDisRate.value = jVarLocalinJSONData.DiscountRs;
};

export { StartFunc };