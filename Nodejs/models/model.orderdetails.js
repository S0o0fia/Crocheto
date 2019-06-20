const mongoose = require('mongoose');

var orderDetailsSchema =  new mongoose.Schema ({

   _id : {type:Number , unique:true} ,
   OrderID   : {type: Number , ref : 'Orders'},
   ProductID   : {type: Number , ref : 'Product'},
   Qunatity : {type : Number , required:"Select Qunatity"} , 
   Price : {type : Number}
});


var orderDetails = mongoose.model("OrderDetails", orderDetailsSchema, "OrderDetails")

module.exports = orderDetails;
