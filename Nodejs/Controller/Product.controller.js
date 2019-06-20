var product = require("../models/model.product");
var category = require("../models/model.category");

module.exports.getProduct = ( req , res)=>
{
  
 category.findOne({Name: req.query.Name} , function (err , result)
 {
    if(err) 
     console.log(err);

  console.log(result._id);
  product.find({Cat_id : result._id} ,
  function(err, products) {
   
    if(err)
     console.log(err);
    else {
         
        
         res.send(products);
    }
  }) ;
 } );
 
  
}
