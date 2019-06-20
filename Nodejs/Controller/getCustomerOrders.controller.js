var Customer = require("../models/model.customer");
var Order = require("../models/model.order");
var customerId ;
module.exports.getOrders = ( req , res)=>
{
  
//Getting Customer Id 
Customer.findOne({ Email: req.query.Email }, function (err, result) {
    if (err)
      console.log(err);
    else
     {
      Order.find({CustomerId : result._id} , function (err , result)
      {
    
        if (err)
        console.log(err);
      else
          res.send(result);
    });
     }
  });
  
  
 
}
