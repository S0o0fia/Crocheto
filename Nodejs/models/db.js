const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config. MONGODB_URI , (err)=>
{
    if(err)
      console.log("Erorr Connection to DB "+JSON.stringify(err));
      else 
      console.log("Connection Scuceed");
});


require("./model.customer");