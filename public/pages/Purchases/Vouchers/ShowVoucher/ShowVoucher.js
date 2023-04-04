import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";
import { StartFunc as AddListenersStartFunc } from "./AddListeners.js";
import { ConfigObject } from "../../../ApiConfig.js";
import { KeysObject } from "../ConfigKeys.js";
import { StartFunc as FormLoadStartFunc } from "./ToDom/FormLoad.js";
import { StartFunc as StartFuncShowQrCode } from "./ToDom/ShowQrCode.js";

let jVarCommonKToken = ConfigObject.TokenName;
let jVarLocalStorageKeyName = ConfigObject.LocalStorageKeyName;
let jVarCommonKeys = KeysObject.CommonKeys;
let jVarCommonProjectName = ConfigObject.ProjectName;

let jFStartFunc = async () => {
    CheckUserFuncsjFStartFunc({
        inUserKey: jVarLocalStorageKeyName,
        inKTokenKey: jVarCommonKToken
    });

    await FormLoadStartFunc({ inProjectName: jVarCommonProjectName });

    await ShowOnDomStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
    await StartFuncShowQrCode({ inProjectName: jVarCommonProjectName });
};

jFStartFunc().then(() => {
    AddListenersStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
});