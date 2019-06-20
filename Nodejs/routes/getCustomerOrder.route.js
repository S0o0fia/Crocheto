//place the route here for the api 
const express = require("express");
const router = express.Router();
//to export register function 
const getOrders = require("../Controller/getCustomerOrders.controller");
router.get('/Orders' , getOrders.getOrders);
module.exports = router;