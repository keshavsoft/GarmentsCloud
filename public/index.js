import { jFStartFunc as CheckUserFuncsjFStartFunc } from "./CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { ConfigObject } from "./ApiConfig.js";
import { StartFunc as StartFuncToDom } from "./index/ToDom/Start.js";

let jVarCommonKToken = ConfigObject.TokenName;
let jVarLocalStorageKeyName = ConfigObject.LocalStorageKeyName;

let jFStartFunc = () => {
    CheckUserFuncsjFStartFunc({
        inUserKey: jVarLocalStorageKeyName,
        inKTokenKey: jVarCommonKToken
    });

    StartFuncToDom({});
    console.log("aaaaaaaaaaaaa");
};

jFStartFunc();