const Customer = require("../models/model.customer");
module.exports.oneCustomer = function (req , res)
{
    Customer.findOne({Email: req.query.Email}, function (err , result)
    {
       if(err) 
        console.log(err);
   
    else
    res.send(result);
    
     }) ;

    
}