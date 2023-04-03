let StartFunc = () => {
    let jVarLocalCostValue = document.getElementById("ValueAdditionId");

    let jVarLocalRate = document.getElementById("RateId1");
    let jVarLocalQty = document.getElementById("QtyId1");

    jVarLocalCostValue.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
            let localCal = jVarLocalRate.value * jVarLocalQty.value;
            jVarLocalCostValue.value = parseInt(localCal);

        }
    });
};

export { StartFunc }