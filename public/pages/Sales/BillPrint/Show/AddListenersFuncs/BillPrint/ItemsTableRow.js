const jfInsertToPreDiv = () => {
    let jVarLocalInventoryData = localStorage.getItem("InventoryData");
    let jVarLocalInventoryDataAsJson = JSON.parse(jVarLocalInventoryData);

    let localTotalAmountId = document.getElementById("TotalAmountId")
    let localTotalDiscountId = document.getElementById("TotalDiscountId")
    let localTotalNettAmountId = document.getElementById("TotalNettAmountId")

    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForGridHeader");

    k1.innerHTML += k2.innerHTML;

    jVarLocalInventoryDataAsJson.forEach(element => {
        let jVarLoopInsideItem = `M-${element.pk}/${element.ItemName}`;
        let jVarLoopInsideRate = `${element.UnitRate}`;
        let jVarLoopInsideGST = `${element.GST}`;
        let jVarLoopInsideDisPercentage = `${element.DisPercentage}%-${element.DisRate}`;
        let jVarLoopInsideGrossAmout = `${element.GrossAmout}`;

        k1.innerHTML += `${element.sno.toString().padStart(2, " ")}`;
        k1.innerHTML += `${" ".repeat(4)}${jVarLoopInsideItem.padEnd(24)}`;
        k1.innerHTML += `${jVarLoopInsideRate.padStart(15)}\n`;
        k1.innerHTML += `${jVarLoopInsideGST.padStart(10)}`;
        k1.innerHTML += `${jVarLoopInsideDisPercentage.padStart(17)}`;
        k1.innerHTML += `${jVarLoopInsideGrossAmout.padStart(18)}\n`;
    });

    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += `                     Gross Amount    :   ${localTotalAmountId.innerHTML}\n`;
    k1.innerHTML += `                   Total Discount    :    ${localTotalDiscountId.innerHTML}\n`;
    k1.innerHTML += `                          Net Amt    :   ${localTotalNettAmountId.innerHTML}\n`;
};

export { jfInsertToPreDiv };