import { StartFunc as StartFuncQrCodeModalPopUp } from "../../../FetchFuncs/ForPrintQrCodes/QrCodeModalPopUp.js";

const StartFunc = () => {
    let jVarLocalPrintQrCodesPrintButtonId = document.getElementById("PrintQrCodesPrintButtonId");

    jVarLocalPrintQrCodesPrintButtonId.addEventListener("click", jFLocalPrintQrCodesShowButtonClickFunc);
};

const jFLocalPrintQrCodesShowButtonClickFunc = async () => {
    let jVarArray = jFLocalPrepareDataArray();

    await jFLocalInsertToModal({ inDataArray: jVarArray });

    jFLocalInsertQrCodes();
    jFLocalShowModal();
};

const jFLocalShowModal = () => {
    let jVarLocalId = "ModalForQrCodeMultiple";

    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

    myModal.show();
};

const jFLocalInsertQrCodes = () => {
    let jVarLocalModalBodyForQrCodeMultiple = document.getElementById("ModalBodyForQrCodeMultiple");
    let jVarLocalCanvases = jVarLocalModalBodyForQrCodeMultiple.querySelectorAll(".CanvasClass");

    for (let i = 0; i < jVarLocalCanvases.length; i++) {
        let jVarLoopInsideDataSet = jVarLocalCanvases[i].dataset;
        GenerateQrCodeOnModal({ inQrData: jVarLoopInsideDataSet.userdescription, inCanvasId: jVarLocalCanvases[i] });
    };
};

const jFLocalInsertToModal = async ({ inDataArray }) => {
    let jVarArray = inDataArray;

    let jVarLocalModalBodyForQrCodeMultiple = document.getElementById("ModalBodyForQrCodeMultiple");

    let jVarLocalTemplate = await StartFuncQrCodeModalPopUp();
    var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

    let jVarFromTemplate = template(jVarArray);

    jVarLocalModalBodyForQrCodeMultiple.innerHTML = jVarFromTemplate;
};

const jFLocalPrintQrCodesShowButtonClickFunc_Keshav_23Apr2023 = async () => {
    let jVarLocalPrintQrCodesTableBodyId = document.getElementById("PrintQrCodesTableBodyId");
    let jVarLocalSelected = jVarLocalPrintQrCodesTableBodyId.querySelectorAll(".form-check-input:checked");
    let jVarArray = [];
    let jVarLocalAliesNameId = document.getElementById("AliesNameId");
    let jVarLocalPurchasePkId = document.getElementById("PurchasePkId");
    let jVarLocalModalBodyForQrCodeMultiple = document.getElementById("ModalBodyForQrCodeMultiple");

    for (let i = 0; i < jVarLocalSelected.length; i++) {
        let jVarLoopInside = jVarLocalSelected[i].dataset;

        jVarArray.push({
            ProductName: jVarLoopInside.productname,
            SalePrice: jVarLoopInside.saleprice,
            AliasName: jVarLocalAliesNameId.innerHTML,
            PurchasePk: jVarLocalPurchasePkId.innerHTML,
            InventorySerial: jVarLoopInside.inventoryserial,
            QrCode: jVarLoopInside.qrcode
        });
    };

    let jVarLocalTemplate = await StartFuncQrCodeModalPopUp();
    var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

    let jVarFromTemplate = template(jVarArray);

    jVarLocalModalBodyForQrCodeMultiple.innerHTML = jVarFromTemplate;

    let jVarLocalCanvases = jVarLocalModalBodyForQrCodeMultiple.querySelectorAll(".CanvasClass");

    // inQrData: `${jVarLocalFromDom.Barcode}/${jVarLocalFromDom.ProductName}/${jVarLocalFromDom.ProductAliasName}/${jVarLocalFromDom.UserDescription}/${jVarLocalFromDom.SalePrice}`,
    // inQrData: `M-${recipient}/${jVarLocalproductname}/${jVarLocalAliesName}-${jVarLocalpurchasepk}-${jVarLocalinventoryserial}-${localQty}/${jVarLocalSalePrice}`,

    for (let i = 0; i < jVarLocalCanvases.length; i++) {
        let jVarLoopInsideDataSet = jVarLocalCanvases[i].dataset;
        GenerateQrCodeOnModal({ inQrData: jVarLoopInsideDataSet.userdescription, inCanvasId: jVarLocalCanvases[i] });
    };

    let jVarLocalId = "ModalForQrCodeMultiple";

    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

    myModal.show();
};

const jFLocalPrepareDataArray = () => {
    let jVarLocalPrintQrCodesTableBodyId = document.getElementById("PrintQrCodesTableBodyId");
    let jVarLocalSelected = jVarLocalPrintQrCodesTableBodyId.querySelectorAll(".form-check-input:checked");
    let jVarArray = [];
    let jVarLocalAliesNameId = document.getElementById("AliesNameId");
    let jVarLocalPurchasePkId = document.getElementById("PurchasePkId");

    for (let i = 0; i < jVarLocalSelected.length; i++) {
        let jVarLoopInside = jVarLocalSelected[i].dataset;

        jVarArray.push({
            ProductName: jVarLoopInside.productname,
            SalePrice: jVarLoopInside.saleprice,
            AliasName: jVarLocalAliesNameId.innerHTML,
            PurchasePk: jVarLocalPurchasePkId.innerHTML,
            InventorySerial: jVarLoopInside.inventoryserial,
            QrCode: jVarLoopInside.qrcode
        });
    };

    return jVarArray;
};

let GenerateQrCodeOnModal = ({ inQrData = "", inCanvasId }) => {
    var canvas = inCanvasId;
    canvas.height = 1;
    canvas.width = 1;
    canvas.style.visibility = 'hidden';

    // Convert the options to an object.
    let opts = {};

    // Finish up the options
    opts.text = inQrData;
    opts.bcid = "qrcode";
    opts.scaleX = 1;
    opts.scaleY = 1;
    opts.rotate = "N";

    // Draw the bar code to the canvas
    try {
        let ts0 = new Date;
        bwipjs.toCanvas(canvas, opts);
        show(ts0, new Date);
    } catch (e) {
        console.log("error : ", e);

        return;
    }

    function show(ts0, ts1) {
        canvas.style.visibility = 'visible';
    }
};

export { StartFunc }