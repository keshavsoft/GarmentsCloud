let StartFunc = () => {
    let jVarLocalScanQrCodeId = document.getElementById("ScanQrCodeId");

    jVarLocalScanQrCodeId.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let jVarLocalQrCode = event.currentTarget.value;
            let jVarLocalQrCodeArray = jVarLocalQrCode.split("/");
            let jVarLocalCodeArray = jVarLocalQrCodeArray[0].split("-");

            if (jVarLocalCodeArray.length === 2) {
                ScanQrCodeIdKeyPressFunc({ inQrCode: jVarLocalCodeArray[1] });
            };

            if (jVarLocalCodeArray.length === 1) {
                ScanQrCodeIdKeyPressFunc({ inQrCode: jVarLocalCodeArray[0] });
            };
        };
    });
};

let ScanQrCodeIdKeyPressFunc = ({ inQrCode }) => {
    window.location = `?RowPK=${inQrCode}`;
};

export { StartFunc }