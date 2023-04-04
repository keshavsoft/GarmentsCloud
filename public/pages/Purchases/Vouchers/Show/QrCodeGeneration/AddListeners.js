import { StartFunc as StartFuncToModal } from "./ButtonsClickFuncs/ToModal.js";

let StartFunc = async () => {
    let jVarLocalShowQrCodeButtonClass = document.getElementsByClassName("GenerateQrCodeButtonClass");

    for (let i = 0; i < jVarLocalShowQrCodeButtonClass.length; i++) {
        jVarLocalShowQrCodeButtonClass[i].addEventListener("click", loccalFunc)
    };
};

let loccalFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalrowpk = jVarLocalCurrentTarget.dataset.rowpk;
    let jVarLocalproductName = jVarLocalCurrentTarget.dataset.productname;
    let jVarLocalProductAliasName = jVarLocalCurrentTarget.dataset.productaliasname;
    let jVarLocalCostPrice = jVarLocalCurrentTarget.dataset.costprice;
    let jVarLocalSalePrice = jVarLocalCurrentTarget.dataset.saleprice;
    let jVarLocalPersentage = jVarLocalCurrentTarget.dataset.persentage;
    let jVarLocalUserDescription = jVarLocalCurrentTarget.dataset.userdescription;

    let inData = {};
    inData.pk = jVarLocalrowpk
    inData.ProductName = jVarLocalproductName
    inData.ProductAliasName = jVarLocalProductAliasName
    inData.CostPrice = jVarLocalCostPrice
    inData.SalePrice = jVarLocalSalePrice
    inData.Persentage = jVarLocalPersentage
    inData.UserDescription = jVarLocalUserDescription


    await StartFuncToModal({ inData });

};

export { StartFunc };