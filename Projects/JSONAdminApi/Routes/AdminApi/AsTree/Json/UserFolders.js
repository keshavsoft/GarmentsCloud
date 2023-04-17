var express = require('express');
var router = express.Router();
let CommonScreensFromDisplayJson = require("./UserFolders/ScreensFromDisplayJson");
let CommonReportsFolder = require("./UserFolders/ReportsFolder");

router.use('/ScreensFromDisplayJson', CommonScreensFromDisplayJson);
router.use('/ReportsFolder', CommonReportsFolder);

module.exports = router;