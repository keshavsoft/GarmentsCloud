let StartFunc = () => {
    let jVarLocalScanQrCodeId = document.getElementById("ScanQrCodeId");

    jVarLocalScanQrCodeId.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let jVarLocalQrCode = event.currentTarget.value;
            ScanQrCodeIdKeyPressFunc({ inQrCode: jVarLocalQrCode });
        }
    });
};

let ScanQrCodeIdKeyPressFunc = ({ inQrCode }) => {
    window.location = `?RowPK=${inQrCode}`;
};

export { StartFunc }