
const express = require("express");
const router = express.Router();
//to export register function 
const getOrderDetails = require("../Controller/getOrderDetails.controller");
router.get('/OrderDetails' , getOrderDetails.getOrderDetails);
module.exports = router;