import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPull/TableRow.js";

let StartFunc = async ({ inDataAsArray }) => {
    await ShowOnDomTableBody({ inDataAsArray });
};

let ShowOnDomTableBody = async ({ inDataAsArray }) => {
    let jVarLocalTableBodyId = document.getElementById("InvTableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTemplate.KTF) {
        jVarLocalTableBodyId.innerHTML = "";
        var template = Handlebars.compile(jVarLocalTemplate.HtmlString);
        console.log("inDataAsArray ", inDataAsArray);

        inDataAsArray.forEach(element => {
            let jVarLocalToShowHtml = template(element);

            jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
        });

        // Object.entries(inData).forEach(
        //     ([key, value]) => {
        //         value.pk = key;
        //         value.FK = inData.pk;
        //         value.SupplierName = inData.SupplierName;
        //         value.BillNumber = inData.BillNumber;
        //         value.Date = inData.Date;

        //         let jVarLocalToShowHtml = template(value);

        //         jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
        //     }
        // );


    };
};

export { StartFunc };