import { jFUpdateFunc } from "./Widths/Addlisteners.js";
import { jFCreateFoldersToDom } from "./Widths/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
