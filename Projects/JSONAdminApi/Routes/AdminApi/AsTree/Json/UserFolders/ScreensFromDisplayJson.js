var express = require('express');
var router = express.Router();
let CommonTableColumns = require("./ScreensFromDisplayJson/TableColumns");
let CommonTableInfo = require("./ScreensFromDisplayJson/TableInfo");
let CommonSubTableColumns = require("./ScreensFromDisplayJson/SubTableColumns");
let CommonSubTableInfo = require("./ScreensFromDisplayJson/SubTableInfo");

router.use('/TableColumns', CommonTableColumns);
router.use('/TableInfo', CommonTableInfo);
router.use('/SubTableColumns', CommonSubTableColumns);
router.use('/SubTableInfo', CommonSubTableInfo);

module.exports = router;