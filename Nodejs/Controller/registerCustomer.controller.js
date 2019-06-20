//to use the schema
const  Customer = require('../models/model.customer');
var counter = 0;
//this function will handle the request from the clinetside 
module.exports.register = (req , res ) =>
{
    var customer = new Customer();
    customer._id = counter++;
    customer.FirstName = req.body.FirstName;
    customer.LastName = req.body.LastName;
    customer.Username = req.body.Username;
    customer.Email = req.body.Email;
    customer.Password = req.body.Password ; 
    customer.Phone = req.body.Phone;
    customer.Address = req.body.Address;
    customer.save ((err , doc)=>{
        if(!err)
           res.send(doc);
           
    });
}
