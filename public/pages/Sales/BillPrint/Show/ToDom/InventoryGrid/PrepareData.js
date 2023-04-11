import { FromNode as FetchFuncForBillsQrCode } from "../../PullData/FetchFuncForBillsQrCode.js";
import { StartFunc as InvGridStartFunc } from "../InvGrid.js";
import { StartFunc as FetchFuncsForMasters } from "../../PullData/FetchFuncsForMasters.js";

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

        await InvGridStartFunc({ inData: jVarLocalNewArray });
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

    console.log("inInvData : ", inInvData, jVarLocalMastersData);
    return jVarLocalNewArray;
};

export { StartFunc };