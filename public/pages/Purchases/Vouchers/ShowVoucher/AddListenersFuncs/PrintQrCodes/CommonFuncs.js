import { StartFunc as StartFuncQrCodeModalPopUp } from "../../FetchFuncs/ForPrintQrCodes/QrCodeModalPopUp.js";

const StartFuncNoShowModal = async ({ inDataArray }) => {
    await jFLocalInsertToModal({ inDataArray });
    jFLocalInsertQrCodes();
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

export { StartFuncNoShowModal }