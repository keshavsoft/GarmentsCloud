let StartFunc = () => {
    let jVarLocalDisPersantage = document.getElementById("DisPersantage");
    let jVarLocalRate = document.getElementById("RateId1");
    let jVarLocalDisRate = document.getElementById("DisRate");
    let jVarLocalGrossAmout = document.getElementById("GrossAmout");

    jVarLocalDisPersantage.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let localdisPercentage = parseInt(jVarLocalDisPersantage.value);
            let jVarLocalRatevalue = parseInt(jVarLocalRate.value);

            let jVarLocalCurrentTarget = parseInt((localdisPercentage * jVarLocalRatevalue) / 100);
            let localWithDisValue = (jVarLocalRatevalue - jVarLocalCurrentTarget)
            jVarLocalDisRate.value = jVarLocalCurrentTarget;
            jVarLocalGrossAmout.value = localWithDisValue;

        }
    });

    jVarLocalDisRate.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let localdisRateValue = parseInt(jVarLocalDisRate.value);
            let jVarLocalRatevalue = parseInt(jVarLocalRate.value);

            let localWithDisValue = (localdisRateValue / jVarLocalRatevalue) * 100;
            // let jVarLocalCurrentTarget = parseInt((localWithDisValue / jVarLocalRatevalue) * 100);
            jVarLocalDisPersantage.value = localWithDisValue;
            jVarLocalGrossAmout.value = (jVarLocalRatevalue - localdisRateValue);

        }
    });

    LocalGrossAmoutAddListenerFunc();
};

let LocalGrossAmoutAddListenerFunc = () => {
    let jVarLocalDisPersantage = document.getElementById("DisPersantage");
    let jVarLocalRate = document.getElementById("RateId1");
    let jVarLocalDisRate = document.getElementById("DisRate");
    let jVarLocalGrossAmout = document.getElementById("GrossAmout");

    jVarLocalGrossAmout.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let jVarLocalRatevalue = parseInt(jVarLocalRate.value);

            jVarLocalDisRate.value = jVarLocalRatevalue - jVarLocalGrossAmout.value;

            jVarLocalDisPersantage.value = (jVarLocalDisRate.value / jVarLocalRate.value) * 100;
        }
    });
};

export { StartFunc };