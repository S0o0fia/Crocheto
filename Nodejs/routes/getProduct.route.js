//place the route here for the api 
const express = require("express");
const router = express.Router();
//to export register function 
const ctrlproduct = require("../Controller/Product.controller");
router.get('/products' , ctrlproduct.getProduct);
module.exports = router;
