var express = require('express');
var router = express.Router();
let CommonSearchRowArray = require("./SubMenu/SearchRowArray");
let CommonFooterType = require("./SubMenu/FooterType");
let CommonTableRowOptions = require("./SubMenu/TableRowOptions");


router.use('/SearchRowArray', CommonSearchRowArray);
router.use('/FooterType', CommonFooterType);
router.use('/TableRowOptions', CommonTableRowOptions);



module.exports = router;