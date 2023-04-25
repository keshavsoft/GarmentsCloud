let StartFunc = () => {
    let LocalPrintId = document.getElementById("PrintId");
    LocalPrintId.addEventListener("click", jFLocalClickFunc)

};
const jFLocalPrintHeader = () => {
    let jVarLocalBillData = localStorage.getItem("BillData");
    let jVarLocalBillDataAsJson = JSON.parse(jVarLocalBillData);
    console.log("jVarLocalBillDataAsJson : ", jVarLocalBillDataAsJson);
    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForFirmHeading");
    let k3 = document.getElementById("TemplateForTerms");

    k1.innerHTML += k2.innerHTML;
    k1.innerHTML += `  Customer    :   ${jVarLocalBillDataAsJson.CustomerName}\n`;
    k1.innerHTML += `  Phone    :   ${jVarLocalBillDataAsJson.CustomerNumber}\n`;
    k1.innerHTML += `  Bill    :   ${jVarLocalBillDataAsJson.BillNumber}\n`;
    k1.innerHTML += `  Date    :   ${jVarLocalBillDataAsJson.Date}\n`;


};
const jFLocalPrintGrid = () => {
    let jVarLocalInventoryData = localStorage.getItem("InventoryData");
    let jVarLocalInventoryDataAsJson = JSON.parse(jVarLocalInventoryData);
    let localTotalAmountId = document.getElementById("TotalAmountId")
    let localTotalDiscountId = document.getElementById("TotalDiscountId")
    let localTotalNettAmountId = document.getElementById("TotalNettAmountId")
    // console.log("jVarLocalInventoryDataAsJson : ", jVarLocalInventoryDataAsJson);
    
    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForGridHeader");
    let k3 = document.getElementById("TemplateForGrossTotal");

    k1.innerHTML += k2.innerHTML;
    k1.innerHTML +=
        `${jVarLocalInventoryDataAsJson.map(function (item) {
            return `
        ${item.sno}      M-${item.pk}/${item.ItemName}            ${item.UnitRate}<br>
        ${item.GST}%           ${item.DisPercentage}%                   ${item.GrossAmout}<br>`
        })}   --------------------------------------------<br>`
    k1.innerHTML += `                             Gross Amount:  ${localTotalAmountId.innerHTML}<br>
                            Total Discount:  ${localTotalDiscountId.innerHTML}<br>
                                Net Amt:    ${localTotalNettAmountId.innerHTML}
    `;

};
const jFLocalPrintFooter = () => {
    let jVarLocalInventoryData = localStorage.getItem("GstData");
    let jVarLocalInventoryDataAsJson = JSON.parse(jVarLocalInventoryData);
    let localGstToata = document.getElementById("TotalTaxAmountId");
    let localTotalGSTAmountId = document.getElementById("TotalGSTAmountId");
    console.log("jVarLocalInventoryDataAsJson", jVarLocalInventoryDataAsJson);

    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForGridFooter");
    let k3 = document.getElementById("TemplateForTerms");

    k1.innerHTML += k2.innerHTML;
    k1.innerHTML +=
        `${jVarLocalInventoryDataAsJson.map(function (item) {
            return `${item.GST}%                ${item.GstAmount}            ${item.Amount}<br>`
        })}   --------------------------------------------<br>Total         ${localGstToata.innerHTML}          ${localTotalGSTAmountId.innerHTML}<br>--------------------------------------------<br>`
    k1.innerHTML += k3.innerHTML;



};
let jFLocalClickFunc = () => {
    jFLocalPrintHeader();
    jFLocalPrintGrid();
    jFLocalPrintFooter();
    printJS("PrintDiv", "html");


};
export { StartFunc };