let CommonDataSupplyForGet = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForSubTableColumns/SubMenu/ServerSide/TransformBeforeSave");
let CommonDataSupplyForUpdate = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/SubTableColumns/SubMenu/ServerSide/TransformBeforeSave/Update");

let GetFuncs = async ({ DataPK }) => {
    if (DataPK > 0) {
        return await CommonDataSupplyForGet.AsObject({ inDataPK: DataPK });
    };
};

// exports.Update = async ({ DataPK, folderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson }) => {
//     let LocalinDataPk = DataPK;
//     if (LocalinDataPk > 0) {
//         return await CommonDataSupply.Update({ DataPK, folderName, FileName, ItemName, ScreenName, DataAttribute, BodyAsJson });
//     }
// };
let Update = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, subtablecolumnkey, DataAttribute, BodyAsJson }) => {
    let LocalDataPk = DataPK;

    if (LocalDataPk > 0) {
        return await CommonDataSupplyForUpdate.Update({ DataPK, FolderName, FileName, ItemName, ScreenName, subtablecolumnkey, DataAttribute, BodyAsJson })
    };
};


module.exports = {
    GetFuncs, Update
};
