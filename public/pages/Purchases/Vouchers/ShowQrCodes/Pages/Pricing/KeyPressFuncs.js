let StartFunc = () => {
    let jVarLocalCostValue = document.getElementById("ValueAdditionId");
    let jVarLocalMRPId = document.getElementById("MRPId");

    let jVarLocalRate = document.getElementById("RateId1");
    let jVarLocalValueAdditionId = document.getElementById("ValueAdditionId");

    jVarLocalCostValue.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            let localCal = jVarLocalRate.value * (1 + (jVarLocalValueAdditionId.value / 100));
            jVarLocalMRPId.value = parseInt(localCal);
        }
    });
};

export { StartFunc }