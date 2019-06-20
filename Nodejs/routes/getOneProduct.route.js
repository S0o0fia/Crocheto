//place the route here for the api 
const express = require("express");
const router = express.Router();
//to export register function 
const OneProduct = require("../Controller/getOneProduct.controller");
router.get('/OneProduct' , OneProduct.OneProduct);
module.exports = router;
