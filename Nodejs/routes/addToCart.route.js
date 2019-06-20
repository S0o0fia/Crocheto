//place the route here for the api 
const express = require("express");
const router = express.Router();
//to export register function 
const addtocart = require("../Controller/addToCart.controller");
router.post('/addtocart' ,ensureToken , addtocart.addCart);
function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  }
module.exports = router;
