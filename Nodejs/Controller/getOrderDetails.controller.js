var Orderdetails = require("../models/model.orderdetails");
var Order = require("../models/model.order");
module.exports.getOrderDetails = ( req , res)=>
{
  
//Getting Customer Id 
Order.findOne({ _id: req.query._id }, function (err, result) {
    if (err)
      console.log(err);
    else
     {
      Orderdetails.find({OrderId : result._id} , function (err , result)
      {
    
        if (err)
        console.log(err);
      else
          res.send(result);
    });
     }
  });
  
  
 
}
