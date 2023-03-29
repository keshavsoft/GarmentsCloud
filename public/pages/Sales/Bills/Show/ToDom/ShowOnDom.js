import { FromNode } from "../PullData/FetchFuncs.js";
import { FromNode as FetchFuncForBillsQrCode } from "../PullData/FetchFuncForBillsQrCode.js";
import { ReturnRowPK } from "../urlSearchParams.js";
import { StartFunc as InvGridStartFunc } from "./InvGrid.js";
import { StartFunc as TableFootSuccessStartFunc } from "../FetchFuncs/HtmlPull/TableFootSuccess.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName, inShowSuccess }) => {
    let jVarLocalRowPk = ReturnRowPK();

    let jVarLocalData = await FromNode({
        inFolderName,
        inFileName,
        inItemName,
        inRowPK: jVarLocalRowPk.RowPK,
        inProjectName
    });

    if (jVarLocalData.KTF) {
        let localpk = jVarLocalData.JsonData.pk
        jVarLocalData.JsonData.pk = jVarLocalRowPk.RowPK;

        await ShowOnDom({ inData: jVarLocalData.JsonData, inShowSuccess });
        let jVarLocalDataToShow = await FetchFuncForBillsQrCode({
            inFolderName,
            inFileName,
            inItemName,
            inRowPK: jVarLocalRowPk.RowPK,
            inProjectName
        });

        if (jVarLocalDataToShow.KTF) {
            let localdata = jVarLocalDataToShow.JsonData
            let filteredArray = localdata.filter(item => item.pk === localpk);

            await InvGridStartFunc({ inData: filteredArray });
        };
    };
};

let ShowOnDom = async ({ inData, inShowSuccess }) => {
    let jVarLocalVoucherNameId = document.getElementById("VoucherNameId");
    let jVarLocalBillNumberId = document.getElementById("BillNumberId");
    let jVarLocalDateId = document.getElementById("DateId");

    if (jVarLocalVoucherNameId !== null) {
        jVarLocalVoucherNameId.innerHTML = inData.Date;
    };
    if (jVarLocalBillNumberId !== null) {
        jVarLocalBillNumberId.innerHTML = inData.BillNumber;
    };

    if (jVarLocalDateId !== null) {
        jVarLocalDateId.innerHTML = inData.Date;
    };

    await ShowSuccessFunc({ inShowSuccess });
};

let ShowSuccessFunc = async ({ inShowSuccess }) => {
    if (inShowSuccess) {
        let LocalFromHtml = await TableFootSuccessStartFunc();
        let LocalTableFooterSuccessId = document.getElementById("TableFooterSuccessId");

        if (LocalFromHtml.KTF) {
            LocalTableFooterSuccessId.innerHTML = LocalFromHtml.HtmlString;
        };
    };
};

export { StartFunc };