//place the route here for the api 
const express = require("express");
const router = express.Router();
//to export register function 
const addCategory = require("../Controller/addCategory.controller");
router.post('/addCategory' , addCategory.addCategory);
module.exports = router;
