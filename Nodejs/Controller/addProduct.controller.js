const Product = require("../models/model.product");

var count = 0;

module.exports.addProduct = function(req , res)
{
    Product.find({}, function(err , result)
    {
           if(!err)
           {
               result.forEach((p)=>{
                   count = p._id;
               });
               console.log(count);
               var product = new Product();
               product._id = ++count;
               product.Name  = req.body.Name;
               product.Price = req.body.Price;
               product.Quantity = req.body.Quantity; 
               product.Imgsrc = req.body.Imgsrc;
               product.Cat_id = req.body.Cat_id;
               product.save((err, result)=>
               {
                    if(!err)
                    res.send(result);
                    else 
                    console.log(err);
               });
          }
          else 
          console.log(err);
     });
}
