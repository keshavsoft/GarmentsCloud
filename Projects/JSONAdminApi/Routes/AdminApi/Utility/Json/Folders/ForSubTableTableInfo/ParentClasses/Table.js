let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../Repository/AdminApi/Utility/Json/Folder/ForSubTableTableInfo/ParentClasses/Table");

router.get('/', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.Table({ LocalUserPK }).then(DataFromRepo => {
        res.end(JSON.stringify(DataFromRepo));
    }).catch();
});

module.exports = router;