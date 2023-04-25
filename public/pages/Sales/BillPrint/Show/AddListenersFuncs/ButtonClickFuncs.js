let StartFunc =()=>{
    let LocalPrintId = document.getElementById("PrintId");
    LocalPrintId.addEventListener("click",jFLocalClickFunc)

console.log("LocalPrintId",LocalPrintId);
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

    k1.innerHTML += k3.innerHTML;

};
let jFLocalClickFunc = () =>{
    jFLocalPrintHeader()
    printJS("PrintDiv", "html");


};
export {StartFunc};