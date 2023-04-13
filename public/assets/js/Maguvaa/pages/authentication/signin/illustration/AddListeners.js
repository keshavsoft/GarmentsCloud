
let jFStartFunc = async ({ inKeyName }) => {
    let jVarSignInButtonId = document.getElementById("SignInButtonId");
    jVarSignInButtonId.addEventListener("click", (event) => {
        event.preventDefault();
        jFButtonClick({ inKeyName });
    });
};

let jFButtonClick = async ({ inKeyName }) => {
    let jVarLocalUserNameId = document.getElementById("UserNameId");
    let jVarLocalPasswordId = document.getElementById("PasswordId");

    let jVarLocalUserName = jVarLocalUserNameId.value;
    let jVarLocalPassword = jVarLocalPasswordId.value;

    //  let jVarLocalKToken = "KMaguvaaToken";
    //setCookie(jVarLocalKToken, "KeshavSoft", 1);
    let jVarLocalFromToken = await jFGetTokenFromFetch({
        inUserName: jVarLocalUserName,
        inPassWord: jVarLocalPassword
    });

    if (jVarLocalFromToken.KTF) {
        localStorage.setItem(inKeyName, jVarLocalUserName);
        window.location = "/index.html";
    };
};

let jFGetTokenFromFetch = async ({ inUserName, inPassWord }) => {
    let jVarLocalFetchUrl = "/JSONApi/Validate/Users/InUserDataJson/ForUserNameAndPassword/TokenToCookieFirmDetailsAlso";
    let jVArLocalBody = {
        inUserName,
        inPassWord
    };

    let jVArLocalHeader = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVArLocalBody)
    };

    let jVarLocalResponse = await fetch(jVarLocalFetchUrl, jVArLocalHeader);
    let jVarLocalResult = await jVarLocalResponse.json();
    return await jVarLocalResult;
};

export { jFStartFunc }