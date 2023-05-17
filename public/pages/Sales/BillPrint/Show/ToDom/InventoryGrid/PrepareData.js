import { FromNode as FetchFuncForBillsQrCode } from "../../PullData/FetchFuncForBillsQrCode.js";
import { StartFunc as InvGridStartFunc } from "../InvGrid.js";
import { StartFunc as FetchFuncsForMasters } from "../../PullData/FetchFuncsForMasters.js";
import { StartFunc as StartFuncTaxTable } from "../TaxTable.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName, inRowPk }) => {
    let localpk = inRowPk

    let jVarLocalDataToShow = await FetchFuncForBillsQrCode({
        inFolderName,
        inFileName,
        inItemName,
        inRowPK: localpk,
        inProjectName
    });

    if (jVarLocalDataToShow.KTF) {
        let localdata = jVarLocalDataToShow.JsonData

        await FetchFuncsForMasters({ inProjectName });

        let jVarLocalNewArray = LocalInsertGstPercentage({ inInvData: localdata });
        
        window.localStorage.setItem("InventoryData", JSON.stringify(jVarLocalNewArray));

        await InvGridStartFunc();
        await StartFuncTaxTable();
    };
};

let LocalInsertGstPercentage = ({ inInvData }) => {
    let jVarLocalMastersData = localStorage.getItem("Masters");

    let jVarLocalNewArray = inInvData.map(element => {
        //ItemName
        let jVarLoopInsideMastersFind = JSON.parse(jVarLocalMastersData).find(e => e.ItemName === element.ItemName);

        element.GST = jVarLoopInsideMastersFind.GST;
        return element;
    });

    return jVarLocalNewArray;
};

export { StartFunc };