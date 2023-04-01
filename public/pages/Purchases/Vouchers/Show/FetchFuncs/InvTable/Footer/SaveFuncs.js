import { ReturnRowPK } from "../../../urlSearchParams.js";

let PreparePostData = () => {
    let jVarLocalItemNameId = document.getElementById("ItemsDataListId");
    let jVarLocalRateId = document.getElementById("RateId1");
    let jVarLocalQty = document.getElementById("QtyId1");
    let jVarLocalSno = document.getElementById("Snoid");
    let jVarvalueAddition = document.getElementById("ValueAdditionId");
    let jVarvalueCostValue = document.getElementById("CostValueId");
    let jVarvalueMRP = document.getElementById("MRPId");
    let jVarvalueSaleValue = document.getElementById("SaleValueId");


    let jVarLocalReturnData = {};
    jVarLocalReturnData.ItemName = jVarLocalItemNameId.value;

    if (!(jVarLocalRateId === null)) {
        jVarLocalReturnData.UnitRate = parseInt(jVarLocalRateId.value);
    };

    if (!(jVarLocalQty === null)) {
        jVarLocalReturnData.Qty = parseInt(jVarLocalQty.value);
    };
    if (!(jVarLocalSno === null)) {
        jVarLocalReturnData.sno = parseInt(jVarLocalSno.value);
    };

    if (!(jVarvalueAddition === null)) {
        jVarLocalReturnData.PercentageValueAddition = parseInt(jVarvalueAddition.value);
    };

    if (!(jVarvalueCostValue === null)) {
        jVarLocalReturnData.CostValue = parseInt(jVarvalueCostValue.value);
    };

    if (!(jVarvalueMRP === null)) {
        jVarLocalReturnData.MRP = parseInt(jVarvalueMRP.value);
    };

    if (!(jVarvalueSaleValue === null)) {
        jVarLocalReturnData.SaleValue = parseInt(jVarvalueSaleValue.value);
    };


    //jVarLocalReturnData.GST = jVarLocalGSTId.value;

    return jVarLocalReturnData;
};

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
        let jVarLocalRowPK = ReturnRowPK().RowPK;
        //  jVarLocalRowPK = 2;

        let inFetchPostData = {
            FileNameOnly: inFileName,
            FolderName: inFolderName,
            ItemName: inItemName,
            JsonPk: jVarLocalRowPK,
            ScreenName: "Create",
            SubTableKey: "InvGrid"
        };

        inFetchPostData.DataToInsert = PreparePostData();
        let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/SubTable/WithChecking/Insert`;

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();
        LocalReturnObject.KTF = data.KTF;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };