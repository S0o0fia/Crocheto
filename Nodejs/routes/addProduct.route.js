//place the route here for the api 
const express = require("express");
const router = express.Router();
//to export register function 
const addProduct = require("../Controller/addProduct.controller");
router.post('/addProduct' , addProduct.addProduct);
module.exports = router;
