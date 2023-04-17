var express = require('express');
var router = express.Router();
let CommonSubKeys = require("./TableColumns/SubKeys");
let CommonToggles = require("./TableColumns/Toggles");
let CommonDataAttributes = require("./TableColumns/DataAttributes");
let CommonAllInOneWithValues = require("./TableColumns/AllInOneWithValues");
let CommonDefaultValue = require("./TableColumns/DefaultValue");
let CommonToSubTable = require("./TableColumns/ToSubTable");
let CommonCreateNew = require("./TableColumns/CreateNew");
let CommonDuplicate = require("./TableColumns/Duplicate");

router.use('/SubKeys', CommonSubKeys);
router.use('/Toggles', CommonToggles);
router.use('/DataAttributes', CommonDataAttributes);
router.use('/AllInOneWithValues', CommonAllInOneWithValues);
router.use('/DefaultValue', CommonDefaultValue);
router.use('/ToSubTable', CommonToSubTable);
router.use('/CreateNew', CommonCreateNew);
router.use('/Duplicate', CommonDuplicate);


module.exports = router;