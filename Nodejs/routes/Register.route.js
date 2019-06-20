//place the route here for the api 
const express = require("express");
const router = express.Router();
//to export register function 
const ctrlcustomer = require("../Controller/registerCustomer.controller");
router.post('/register' , ctrlcustomer.register);
module.exports = router;

