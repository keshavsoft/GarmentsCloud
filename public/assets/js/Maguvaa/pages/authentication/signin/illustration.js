import { jFStartFunc as AddListenersjFStartFunc } from "./illustration/AddListeners.js";

let jVarCommonKToken = "KToken";
let jVarLocalStorageKeyName = "kUserName";

let jFStartFunc = async ({ inKeyName }) => {
    AddListenersjFStartFunc({ inKeyName });
};

jFStartFunc({ inKeyName: jVarLocalStorageKeyName }).then();