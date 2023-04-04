var express = require('express');
var router = express.Router();

let CommonSave = require("./Images/Save");
let CommonShow = require("./Images/Show");

router.use('/Save', CommonSave);
router.use('/Show', CommonShow);

module.exports = router;