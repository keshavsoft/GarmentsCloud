let StartFunc = async () => {
    let inData = localStorage.getItem('InventoryData');

    await jFTotalAmountIdFunc({ inData: JSON.parse(inData) });
};

let jFTotalAmountIdFunc = async ({ inData }) => {
    let jvarLocalTotalAmountId = document.getElementById("TotalAmountId");
    let jvarLocalTotalDiscountId = document.getElementById("TotalDiscountId");
    let jvarLocalTotalNettAmountId = document.getElementById("TotalNettAmountId");

    let jVarLocalUnitRateArray = inData.map(element => element.UnitRate);
    let jVarLocalDisRateArray = inData.map(element => element.DisRate);
    let jVarLocalGrossAmout = inData.map(element => element.GrossAmout);

    jvarLocalTotalAmountId.innerHTML = jVarLocalUnitRateArray.reduce((a, b) => a + b, 0);;
    jvarLocalTotalDiscountId.innerHTML = jVarLocalDisRateArray.reduce((a, b) => a + b, 0);;
    jvarLocalTotalNettAmountId.innerHTML = jVarLocalGrossAmout.reduce((a, b) => a + b, 0);;

};

export { StartFunc };