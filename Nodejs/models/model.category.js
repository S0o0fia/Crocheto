const mongoose = require('mongoose');

var CategorySchema = new  mongoose.Schema({
  
    _id : {type : Number } , 
    Name : {type : String} , 
});


var category = mongoose.model("Categorys", CategorySchema, "Categorys")

module.exports = category;