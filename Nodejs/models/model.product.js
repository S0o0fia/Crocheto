const mongoose = require('mongoose');

var ProductSchema = new  mongoose.Schema({
  
    _id : {type : Number } , 
    Name : {type : String} , 
    Price : {type :Number} ,
    Quantity  : {type : Number} , 
    Imgsrc : {type : String} , 
    Cat_id :   { type: Number , ref : 'Categorys' } 
});


var product = mongoose.model("Product", ProductSchema, "Product")

module.exports = product;