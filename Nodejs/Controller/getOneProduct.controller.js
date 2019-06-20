const Product = require("../models/model.product");
module.exports.OneProduct = function (req , res)
{
    Product.findOne({_id: req.query._id}, function (err , result)
    {
       if(err) 
        console.log(err);
   
    else
    res.send(result);
    
     }) ;

    
}