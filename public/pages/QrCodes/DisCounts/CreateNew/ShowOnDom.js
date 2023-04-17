let StartFunc = ({ inQueryData }) => {

    localSupplierNameFunc({ inQueryData });
    localDateFunc({ inQueryData });
    localBillNumberFunc({ inQueryData });
    localItemsDataListFunc({ inQueryData });
    localPriceFunc({ inQueryData });
    localInventorySerialFunc({ inQueryData });
    localPurchasePkFunc({ inQueryData });
    localdeschiptionFunc({ inQueryData });
    localPercentageValueAdditionFunc({ inQueryData });

};

let localSupplierNameFunc = ({ inQueryData }) => {

    let localinQueryData = inQueryData;
    let jvarlocalSupplierName = document.getElementById("SupplierNameSelectId");
    jvarlocalSupplierName.value = localinQueryData.SupplierName;
};

let localDateFunc = ({ inQueryData }) => {

    let localinQueryData = inQueryData;
    let jvarlocalDate = document.getElementById("DateId");
    jvarlocalDate.value = localinQueryData.Date;
};

let localBillNumberFunc = ({ inQueryData }) => {

    let localinQueryData = inQueryData;
    let jvarlocalBillNumberId = document.getElementById("BillNumberId");
    jvarlocalBillNumberId.value = localinQueryData.BillNumber;
};

let localItemsDataListFunc = ({ inQueryData }) => {
    let localinQueryData = inQueryData;
    let jvarlocalItemsDataList = document.getElementById("ItemNameId");
    jvarlocalItemsDataList.value = localinQueryData.ItemName;
};

let localPriceFunc = ({ inQueryData }) => {

    let localinQueryData = inQueryData;
    let jvarlocalPrice = document.getElementById("Price1Id");
    jvarlocalPrice.value = localinQueryData.UnitRate;
};

let localInventorySerialFunc = ({ inQueryData }) => {

    let localinQueryData = inQueryData;
    let jvarlocalInventorySerial = document.getElementById("InventorySerialId");
    jvarlocalInventorySerial.value = localinQueryData.InventorySerial;
};

let localPurchasePkFunc = ({ inQueryData }) => {

    let localinQueryData = inQueryData;
    let jvarlocalPurchasePk = document.getElementById("PurchasePkId");
    jvarlocalPurchasePk.value = localinQueryData.PurchasePk;
};

let localdeschiptionFunc = ({ inQueryData }) => {
    let localinQueryData = inQueryData;
    let jvarlocalPurchasePk = document.getElementById("edit-deschiption");
    jvarlocalPurchasePk.querySelector("p").innerHTML = `${localinQueryData.Aliasname}-${localinQueryData.Sno}-${localinQueryData.Qty}`;
};

let localPercentageValueAdditionFunc = ({ inQueryData }) => {
    let localinQueryData = inQueryData;
    let jvarlocalPecentagePrice = document.getElementById("PecentagePrice");
    jvarlocalPecentagePrice.value = localinQueryData.PercentageValueAddition;;
};


export { StartFunc };