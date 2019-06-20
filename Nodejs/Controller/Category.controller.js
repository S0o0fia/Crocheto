
var category = require("../models/model.category");

module.exports.getCategory = ( req , res)=>
{
  category
  .find({} , function(err , results)
  
  {  if(err)
       console.log(err);
       else
    res.send(results);
  });
   
     
  
}
