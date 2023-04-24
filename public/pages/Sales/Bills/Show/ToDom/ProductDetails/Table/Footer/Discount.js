let StartFunc = ({ inJSONData }) => {
    let jVarLocalinJSONData = inJSONData;

    let jVarLocalDisPersantage = document.getElementById("DisPersantage");
    let jVarLocalDisRate = document.getElementById("DisRate");

    jVarLocalDisPersantage.value = 0;
    jVarLocalDisRate.value = 0;

    if ("DiscountPer" in jVarLocalinJSONData) {
        jVarLocalDisPersantage.value = jVarLocalinJSONData.DiscountPer;
    };

    jVarLocalDisRate.value = jVarLocalinJSONData.DiscountRs;
    //jVarLocalDisPersantage.click();
    triggerEvent(jVarLocalDisPersantage, 'keypress', 13);
};

function triggerEvent(el, type, keyCode) {
    if ('createEvent' in document) {
        // modern browsers, IE9+
        var e = document.createEvent('HTMLEvents');
        e.keyCode = keyCode;
        e.initEvent(type, false, true);
        el.dispatchEvent(e);
    } else {
        // IE 8
        var e = document.createEventObject();
        e.keyCode = keyCode;
        e.eventType = type;
        el.fireEvent('on' + e.eventType, e);
    }
}


export { StartFunc };