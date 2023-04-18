import { jFStartFunc as CheckUserFromCookie } from "../../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc as AddListenersStartFunc } from "./AddListenerFuncs/StartFunc.js"
import { ConfigObject } from "../../../ApiConfig.js";
import { KeysObject } from "../ConfigKeys.js";

let jVarCommonKToken = ConfigObject.TokenName;
let jVarLocalStorageKeyName = ConfigObject.LocalStorageKeyName;
let jVarCommonKeys = KeysObject.CommonKeys;
let jVarCommonProjectName = ConfigObject.ProjectName;

let StartFunc = async () => {
    CheckUserFromCookie({
        inUserKey: jVarLocalStorageKeyName,
        inKTokenKey: jVarCommonKToken
    });

    await AddListenersStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
};

StartFunc().then();