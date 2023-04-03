let StartFunc = () => {
    let jVarLocalRateId = document.getElementById("RateId1");
    let jVarLocalPecentagePrice = document.getElementById("ValueAdditionId");
    let jVarLocalMRPId = document.getElementById("MRPId");

    jVarLocalPecentagePrice.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            
            let localCalculation = jVarLocalPecentagePrice.value / 100 * jVarLocalRateId.value;
            jVarLocalMRPId.value = parseInt(jVarLocalRateId.value) + parseInt(localCalculation);

        }
    });
};

export { StartFunc }