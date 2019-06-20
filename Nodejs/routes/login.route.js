const express = require("express");
const router = express.Router();
//to export register function 
const logincustomer = require("../Controller/loginCustomer.controller");
router.post('/login' , logincustomer.login);
module.exports = router;
