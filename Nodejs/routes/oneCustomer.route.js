//place the route here for the api 
const express = require("express");
const router = express.Router();
//to export register function 
const ctrlcustomer = require("../Controller/getCustomerData.controller");
router.get('/customer' , ctrlcustomer.oneCustomer);
module.exports = router;
