let StartFunc = () => {
    let LocalPrintId = document.getElementById("PrintId");
    LocalPrintId.addEventListener("click", jFLocalClickFunc)
};

const jFLocalPrintHeader = () => {
    let jVarLocalBillData = localStorage.getItem("BillData");
    let jVarLocalBillDataAsJson = JSON.parse(jVarLocalBillData);

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

    // k1.innerHTML +=
    //     `${jVarLocalInventoryDataAsJson.map(function (item) {
    //         return `
    //     ${item.sno}      M-${item.pk}/${item.ItemName}            ${item.UnitRate}<br>
    //     ${item.GST}%           ${item.DisPercentage}%                   ${item.GrossAmout}<br>`
    //     })}   --------------------------------------------<br>`

    jVarLocalInventoryDataAsJson.forEach(element => {
        let jVarLoopInsideItem = `M-${element.pk}/${element.ItemName}`;
        let jVarLoopInsideRate = `${element.UnitRate}`;
        let jVarLoopInsideGST = `${element.GST}`;
        let jVarLoopInsideDisPercentage = `${element.DisPercentage}%-${element.DisRate}`;
        let jVarLoopInsideGrossAmout = `${element.GrossAmout}`;

        // k1.innerHTML += `${element.sno.toString().padStart(3, "")}${" ".repeat(3)}${jVarLoopInsideItem.padEnd(25)}${jVarLoopInsideRate.padStart(15)}\n`;

        k1.innerHTML += `${element.sno.toString().padStart(3, "")}`;
        k1.innerHTML += `${" ".repeat(3)}${jVarLoopInsideItem.padEnd(24)}`;
        k1.innerHTML += `${jVarLoopInsideRate.padStart(15)}\n`;
        k1.innerHTML += `${jVarLoopInsideGST.padStart(5)}`;
        k1.innerHTML += `${jVarLoopInsideDisPercentage.padStart(17)}`;
        k1.innerHTML += `${jVarLoopInsideGrossAmout.padStart(25)}\n`;
    });

    k1.innerHTML += `   ------------------------------------------\n`
    k1.innerHTML += `                       Gross Amount    :   ${localTotalAmountId.innerHTML}\n`;
    k1.innerHTML += `                     Total Discount    :   ${localTotalDiscountId.innerHTML}\n`;
    k1.innerHTML += `                            Net Amt    :   ${localTotalNettAmountId.innerHTML}\n`;


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

        k1.innerHTML += `${jVarLoopInsideGST.padStart(3, "")}`;
        k1.innerHTML += `${" ".repeat(10)}${jVarLoopInsideGstAmount.padEnd(15)}`;
        // k1.innerHTML += `${jVarLoopInsideGstAmount.padStart(15)}\n`;
        k1.innerHTML += `${jVarLoopInsideAmount.padStart(13)}\n`;

    });
    k1.innerHTML += ` --------------------------------------------\n`
    k1.innerHTML += `Total`;
    k1.innerHTML += `${localGstToata.innerHTML.padStart(4,"")}`;
    k1.innerHTML += `${localTotalGSTAmountId.innerHTML.padEnd(13)}\n`;
    k1.innerHTML += ` --------------------------------------------\n`



    // k1.innerHTML += `${jVarLoopInsideGST.padStart(5)}`;

    // k1.innerHTML +=
    //     `${jVarLocalInventoryDataAsJson.map(function (item) {
    //         return `${item.GST}%                ${item.GstAmount}            ${item.Amount}<br>`
    //     })}   --------------------------------------------<br>Total         ${localGstToata.innerHTML}          ${localTotalGSTAmountId.innerHTML}<br>--------------------------------------------<br>`
    k1.innerHTML += k3.innerHTML;



};
let jFLocalClickFunc = () => {
    jFLocalPrintHeader();
    jFLocalPrintGrid();
    jFLocalPrintFooter();
    printJS("PrintDiv", "html");


};
export { StartFunc };