import { jfInsertToPreDiv as jfInsertToPreDivItemsTableRow } from "./BillPrint/ItemsTableRow.js";

let StartFunc = () => {
    let LocalPrintId = document.getElementById("PrintId");
    LocalPrintId.addEventListener("click", jFLocalClickFunc)
};

const jFLocalPrintHeader = () => {
    let jVarLocalBillData = localStorage.getItem("BillData");
    let jVarLocalBillDataAsJson = JSON.parse(jVarLocalBillData);

    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForFirmHeading");

    k1.innerHTML += k2.innerHTML;
    k1.innerHTML += `  Customer    :   ${jVarLocalBillDataAsJson.CustomerName}\n`;
    k1.innerHTML += `  Phone    :   ${jVarLocalBillDataAsJson.CustomerNumber}\n`;
    k1.innerHTML += `  Bill    :   ${jVarLocalBillDataAsJson.BillNumber}\n`;
    k1.innerHTML += `  Date    :   ${jVarLocalBillDataAsJson.Date}\n`;
};

const jFLocalPrintFooter = () => {
    let jVarLocalInventoryData = localStorage.getItem("GstData");
    let jVarLocalInventoryDataAsJson = JSON.parse(jVarLocalInventoryData);
    let localGstToata = document.getElementById("TotalTaxAmountId");
    let localTotalGSTAmountId = document.getElementById("TotalGSTAmountId");

    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForGridFooter");
    let k3 = document.getElementById("TemplateForTerms");

    k1.innerHTML += k2.innerHTML;
    jVarLocalInventoryDataAsJson.forEach(element => {
        let jVarLoopInsideGST = `${element.GST}%`;
        let jVarLoopInsideGstAmount = `${element.GstAmount}`;
        let jVarLoopInsideAmount = `${element.Amount}`;

        // k1.innerHTML += `${element.sno.toString().padStart(3, "")}${" ".repeat(3)}${jVarLoopInsideItem.padEnd(25)}${jVarLoopInsideRate.padStart(15)}\n`;

        k1.innerHTML += `${jVarLoopInsideGST.padStart(6, " ")}`;
        k1.innerHTML += `${" ".repeat(10)}${jVarLoopInsideGstAmount.padEnd(18)}`;
        // k1.innerHTML += `${jVarLoopInsideGstAmount.padStart(15)}\n`;
        k1.innerHTML += `${jVarLoopInsideAmount.padStart(10)}\n`;

    });
    k1.innerHTML += `----------------------------------------------\n`
    k1.innerHTML += `Total`;
    k1.innerHTML += `${localGstToata.innerHTML.padStart(15)}`;
    k1.innerHTML += `${localTotalGSTAmountId.innerHTML.padStart(24)}\n`;
    k1.innerHTML += `----------------------------------------------\n`



    // k1.innerHTML += `${jVarLoopInsideGST.padStart(5)}`;

    // k1.innerHTML +=
    //     `${jVarLocalInventoryDataAsJson.map(function (item) {
    //         return `${item.GST}%                ${item.GstAmount}            ${item.Amount}<br>`
    //     })}   --------------------------------------------<br>Total         ${localGstToata.innerHTML}          ${localTotalGSTAmountId.innerHTML}<br>--------------------------------------------<br>`
    k1.innerHTML += k3.innerHTML;



};

let jFLocalClickFunc = () => {
    jFLocalPrintHeader();
    jfInsertToPreDivItemsTableRow();
    // jFLocalPrintGrid();
    jFLocalPrintFooter();
    printJS("PrintDiv", "html");
};
export { StartFunc };