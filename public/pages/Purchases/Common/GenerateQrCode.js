let StartFunc = ({ inRowPK }) => {
    let localReturnRowPK = inRowPK;
    let localProjectName = "JSONApi";

    let jVarLocalFromGet = GetFunc({
        inRowPk: localReturnRowPK,
        inProjectName: localProjectName
    });

    if (jVarLocalFromGet.KTF === false) {
        Swal.fire({
            icon: 'success',
            title: 'Raised',
            text: jVarLocalFromGet.KReason
        });
    };

    if (jVarLocalFromGet.KTF) {
        window.location.href = `../Show/Show.html?RowPK=${jVarLocalRowPk}`;
    };
};

let GetFunc = async ({ inRowPk, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Custom/PostFromPk/${inRowPk}`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        if (data.KTF === false) {
            LocalReturnObject.KReason = data.KReason;
            return await LocalReturnObject;
        };

        LocalReturnObject.JsonData = data.JsonData;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };

