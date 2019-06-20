//place the route here for the api 
const express = require("express");
const router = express.Router();
//to export register function 
const ctrlcat = require("../Controller/Category.controller");
router.get('/category' , ctrlcat.getCategory);
module.exports = router;
