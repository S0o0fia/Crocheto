require("./models/db");
const express = require('express');
const cors = require("cors");
const app = express();
const config = require('./config/config');
const bodyparser = require("body-parser");
const rtsIndex = require("./routes/Register.route");
const getProdIndex = require("./routes/getProduct.route");
const getCatIndex = require("./routes/getCategory.route");
const loginIndex = require("./routes/login.route");
const addtoCart = require("./routes/addToCart.route");
const addProduct = require("./routes/addProduct.route");
const addCategory = require("./routes/addCategory.route");
const getOneProduct = require("./routes/getOneProduct.route");
const getOnecustomer = require("./routes/oneCustomer.route");
const getOrders = require("./routes/getCustomerOrder.route"); 
const getOrderDetails = require("./routes/getOrderDetails.route"); 
//Middleware
app.use(bodyparser.json());
app.use(cors());
//Error Handler 
app.use((err , req , res , next)=>
{
    if(err.name === 'ValidationError')
    {
  var valErrors =[];
  Object.keys(err.errors).forEach(key=>valErrors.push(err.errors[key].message));
  res.status(422).send(valErrors);
    }
    
});

//register customer
app.use('/api' , rtsIndex);
//get products 
app.use('/api' , getProdIndex);
//get categories
app.use('/api' , getCatIndex);
//get login 
app.use('/api' , loginIndex);
//add to cart 
app.use('/api' ,addtoCart);


//add to Product
app.use('/api' , addProduct);
//add to Category
app.use('/api',addCategory)
//get specific product 
app.use('/api' , getOneProduct);
//get one customer 
app.use('/api', getOnecustomer);
//get customer ordres 
app.use('/api' , getOrders);
//get order details 
app.use('/api' , getOrderDetails );
app.listen(config.port , () => console.log( "port is  " + config.port ));

