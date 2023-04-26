let StartFunc = ({ inSearchValue }) => {
    jFLocalTableSearch({
        inSearchValue
    });
};
// PrintQrCodesCheckAll
const jFLocalTableSearch = ({ inSearchValue }) => {
    // Declare variables
    var filter, table, tr, td, i, txtValue, j;
    filter = inSearchValue
    table = document.getElementById("PrintQrCodesTableBodyId");
    tr = table.getElementsByTagName("tr");
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td");

        for (j = 0; j < td.length; j++) {
            txtValue = td[j].textContent || td[j].innerText;

            if (txtValue.indexOf(filter) > -1) {
                tr[i].style.display = "";
            };
        };

        // if (td) {
        //     txtValue = td.textContent || td.innerText;

        //     console.log('BBBBBB : ', txtValue, txtValue.indexOf(filter), filter);

        //     if (txtValue.indexOf(filter) > -1) {
        //         tr[i].style.display = "";
        //     } else {
        //         tr[i].style.display = "none";
        //     }
        // }
    }
};

export { StartFunc };