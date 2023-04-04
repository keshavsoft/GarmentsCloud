//import { StartFunc as VeticalStartFunc } from "./FetchFuncs/HtmlPull/Vetical.js";
import { StartFunc as ForCreateNewStartFunc } from "./FetchFuncs/ForCreateNew.js";
import { StartFunc as SuppliersShowOnDom } from "./Suppliers/ShowOnDom.js";
import { StartFunc as StartFuncgetUrlQueryParams } from "./getUrlQueryParams.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    // await ShowOnDom();
    // await SuppliersShowOnDom({ inProjectName });

    // if (document.getElementById('SupplierNameSelectId')) {
    //     var element = document.getElementById('SupplierNameSelectId');
    //     const example = new Choices(element);
    // };

    let localStartFuncgetUrlQueryParams = await StartFuncgetUrlQueryParams();
    console.log("localStartFuncgetUrlQueryParams",localStartFuncgetUrlQueryParams);
    
    let jVarLocalAliasName = document.getElementById('AliasNameId');
    let jVarLocalSupplierNameSelect = document.getElementById('SupplierNameSelectId');
    let jVarLocalBillNumberId = document.getElementById('BillNumberId');

    if ("inAliasName" in localStartFuncgetUrlQueryParams) {
        jVarLocalAliasName.value = localStartFuncgetUrlQueryParams.inAliasName;
    };

    if ("inSupplierName" in localStartFuncgetUrlQueryParams) {
        jVarLocalSupplierNameSelect.value = localStartFuncgetUrlQueryParams.inSupplierName;
    };

    if ("BillNumber" in LocalDataFromFetch.JsonData) {
        jVarLocalBillNumberId.value = LocalDataFromFetch.JsonData.BillNumber;
    };



    await ShowOnDomDefaultValuesFromFetch({ inFolderName, inFileName, inItemName, inProjectName });
};

// let ShowOnDom = async () => {
//     let jVarLocalVerticalId = document.getElementById("VerticalId");

//     let jVarLocalVeticalHtml = await VeticalStartFunc();

//     if (jVarLocalVeticalHtml.KTF) {
//         jVarLocalVerticalId.innerHTML = jVarLocalVeticalHtml.HtmlString;
//     };
// };

let ShowOnDomDefaultValuesFromFetch = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let LocalDataFromFetch = await ForCreateNewStartFunc({ inFolderName, inFileName, inItemName, inProjectName });

    if (LocalDataFromFetch.KTF) {
        let jVarLocalDateId = document.getElementById('DateId');
       

        if ("Date" in LocalDataFromFetch.JsonData) {
            jVarLocalDateId.value = LocalDataFromFetch.JsonData.Date;
        };

       
    };
};

export { StartFunc };