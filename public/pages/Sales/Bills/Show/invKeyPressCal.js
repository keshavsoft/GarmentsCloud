let StartFunc = () => {
    let jVarLocalDisPersantage = document.getElementById("DisPersantage");
    let jVarLocalRate = document.getElementById("RateId1");
    let jVarLocalDisRate = document.getElementById("DisRate");


    jVarLocalDisPersantage.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let localdisPercentage = parseInt(jVarLocalDisPersantage.value);
            let jVarLocalRatevalue = parseInt(jVarLocalRate.value);

            let jVarLocalCurrentTarget = parseInt((localdisPercentage * jVarLocalRatevalue) / 100);
            let localWithDisValue = (jVarLocalRatevalue - jVarLocalCurrentTarget)
            jVarLocalDisRate.value = localWithDisValue;

        }
    });

    jVarLocalDisRate.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let localdisRateValue = parseInt(jVarLocalDisRate.value);
            let jVarLocalRatevalue = parseInt(jVarLocalRate.value);

            let localWithDisValue = parseInt(jVarLocalRatevalue - localdisRateValue);
            let jVarLocalCurrentTarget = parseInt((localWithDisValue / jVarLocalRatevalue) * 100);
            jVarLocalDisPersantage.value = jVarLocalCurrentTarget;

        }
    });
};

export { StartFunc };