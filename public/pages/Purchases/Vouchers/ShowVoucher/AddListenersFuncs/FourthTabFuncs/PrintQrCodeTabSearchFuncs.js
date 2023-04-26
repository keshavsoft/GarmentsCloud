let StartFunc = () => {
    let jVarLocalPrintQrCodeTabSearch = document.getElementById("PrintQrCodeTabSearch");

    jVarLocalPrintQrCodeTabSearch.addEventListener("keypress", jFLocalKeyPress)
};

const jFLocalKeyPress = (event) => {
    let jVarLocalEvent = event;

    if (jVarLocalEvent.keyCode === 13) {
        jVarLocalEvent.preventDefault();

        let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
        let jVarLocalSearchValue = jVarLocalCurrentTarget.value;

        jFLocalTableSearch({
            inTable,
            inSearchValue: jVarLocalSearchValue
        });

        console.log("sssss : ", jVarLocalSearchValue);
    };
};

const jFLocalTableSearch = ({ inTable, inSearchValue }) => {
    // Declare variables
    var filter, table, tr, td, i, txtValue;
    filter = inSearchValue
    table = inTable;
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
};

export { StartFunc };