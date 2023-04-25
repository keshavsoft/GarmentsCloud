import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";
import { ConfigObject } from "../../../ApiConfig.js";
import { KeysObject } from "../ConfigKeys.js";
import { StartFunc as StartFuncButtonClickFuncs } from "./AddListenersFuncs/ButtonClickFuncs.js";


let jVarCommonKToken = ConfigObject.TokenName;
let jVarLocalStorageKeyName = ConfigObject.LocalStorageKeyName;
let jVarCommonKeys = KeysObject.CommonKeys;
let jVarCommonProjectName = ConfigObject.ProjectName;

let jFStartFunc = async () => {
    CheckUserFuncsjFStartFunc({
        inUserKey: jVarLocalStorageKeyName,
        inKTokenKey: jVarCommonKToken
    });
    
    StartFuncButtonClickFuncs();
    await ShowOnDomStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
};


jFStartFunc().then(() => {
});