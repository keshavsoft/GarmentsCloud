let Dal = require("../../../../../../../../../Dal/AdminApi/Utility/Json/FromFolder/FromFile/ScreensFromDisplayJson/Items/Screens/Insert");

exports.Insert = async ({ inJsonConfig,inItemName,inScreenName,inDataPK }) => {
    return await Dal.Insert({ inJsonConfig,inItemName,inScreenName,inDataPK })
};