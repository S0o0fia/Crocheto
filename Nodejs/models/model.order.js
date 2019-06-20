const mongoose = require('mongoose');

var orderSchema =  new mongoose.Schema ({

   _id : {type:Number , unique:true} ,
   custmoerID  : {type: Number , ref : 'Customer'},
   date : {type : Date}
});


var order = mongoose.model("Orders", orderSchema, "Orders")

module.exports = order;
