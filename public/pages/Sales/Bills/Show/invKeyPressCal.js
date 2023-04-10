let StartFunc = () => {
    let jVarLocalDisPersantage = document.getElementById("DisPersantage");
    let jVarLocalRate = document.getElementById("RateId1");
    let jVarLocalDisValue = document.getElementById("DisRate");


    jVarLocalDisPersantage.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let localdisPercentage = parseInt(jVarLocalDisPersantage.value);
            let jVarLocalRatevalue = parseInt(jVarLocalRate.value);

            let jVarLocalCurrentTarget = parseInt((localdisPercentage * jVarLocalRatevalue) / 100);
            let localWithDisValue = (jVarLocalRatevalue - jVarLocalCurrentTarget)

            jVarLocalDisValue.value = localWithDisValue;

        }
    });

    jVarLocalDisValue.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let localdisPercentagevalue = parseInt(jVarLocalDisValue.value);
            let jVarLocalRatevalue = parseInt(jVarLocalRate.value);

            let localWithDisValue = parseInt(jVarLocalRatevalue - localdisPercentagevalue);
            console.log("localWithDisValue",localWithDisValue);


            let jVarLocalCurrentTarget = parseInt((localWithDisValue / jVarLocalRatevalue) * 100);

            jVarLocalDisPersantage.value = jVarLocalCurrentTarget;

        }
    });
};

export { StartFunc };