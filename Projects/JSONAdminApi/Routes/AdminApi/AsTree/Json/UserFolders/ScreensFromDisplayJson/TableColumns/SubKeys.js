var express = require('express');
var router = express.Router();
let CommonHtmlAttributes = require("./SubKeys/HtmlAttributes");
let CommonParentClasses = require("./SubKeys/ParentClasses");
let CommonDisplayType = require("./SubKeys/DisplayType");
let CommonWidths = require("./SubKeys/Widths");
let CommonKDataset = require("./SubKeys/KDataset");
let CommonKDatasetStuff = require("./SubKeys/KDatasetStuff");
let CommonServerSide = require("./SubKeys/ServerSide");

router.use('/HtmlAttributes', CommonHtmlAttributes);
router.use('/ParentClasses', CommonParentClasses);
router.use('/DisplayType', CommonDisplayType);
router.use('/Widths', CommonWidths);
router.use('/KDataset', CommonKDataset);
router.use('/KDatasetStuff', CommonKDatasetStuff);
router.use('/ServerSide', CommonServerSide);

module.exports = router;