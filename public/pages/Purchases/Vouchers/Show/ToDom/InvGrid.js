import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPull/TableRow.js";

let StartFunc = async ({ inData }) => {
    await ShowOnDomTableBody({ inData });
};

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("InvTableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTemplate.KTF) {
        if ((jVarLocalTableBodyId === null) === false) {
          //  jVarLocalTableBodyId.innerHTML = jVarLocalHeadHtml.HtmlString;

            var template = Handlebars.compile(jVarLocalTemplate.HtmlString);
            let jVarLocalLoopIndex = 1;

            Object.entries(inData.InvGrid).forEach(
                ([key, value]) => {
                    value.KSNo = jVarLocalLoopIndex;
                    value.pk = key;
                    value.FK = inData.pk;
                    value.SupplierName = inData.SupplierName;
                    value.AliasName = inData.AliasName;
                    value.BillNumber = inData.BillNumber;
                    value.Date = inData.Date;

                    let jVarLocalToShowHtml = template(value);

                    jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
                    jVarLocalLoopIndex += 1;
                }
            );
        };
    };
};

export { StartFunc };