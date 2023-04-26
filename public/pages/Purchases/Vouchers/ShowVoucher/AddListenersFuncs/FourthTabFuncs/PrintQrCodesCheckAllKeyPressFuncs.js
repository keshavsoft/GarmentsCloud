let StartFunc = () => {
    let jVarLocalPrintQrCodesCheckAll = document.getElementById("PrintQrCodesCheckAll");

    jVarLocalPrintQrCodesCheckAll.addEventListener("click", jFLocalCheckClick)
};
// PrintQrCodeTabSearchButton
const jFLocalCheckClick = (event) => {
    let jVarLocalEvent = event;

    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalRows = document.getElementById("PrintQrCodesTableBodyId");
    let jVarLocalAllRows = jVarLocalRows.querySelectorAll("tr");

    for (var i = 0, l = jVarLocalAllRows.length; i < l; i++) {
        if (jVarLocalAllRows[i].style.display === "") {
            if (jVarLocalCurrentTarget.checked) {
                let jVarLocalinput = jVarLocalAllRows[i].querySelector("input[type=checkbox]");
                jVarLocalinput.checked = true;
            } else {
                let jVarLocalinput = jVarLocalAllRows[i].querySelector("input[type=checkbox]");
                jVarLocalinput.checked = false;
            };

        };
    };
};

export { StartFunc };