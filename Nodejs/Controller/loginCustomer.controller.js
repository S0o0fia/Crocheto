var customer = require('../models/model.customer');
var jwt = require('jsonwebtoken');

module.exports.login = function(req , res)
{
   customer.findOne({Email : req.body.Email},function(err, result)
    {
         if(err)
           console.log(err);
           else
           {
              if((result.Email == req.body.Email) && (result.Password == req.body.Password))
               
                  {
                    const token =  jwt.sign({result} , 'tokenia' , { expiresIn: '2h' });
                     res.json({token:token});
                  }
               
               else

                 res.status(400).send();
             }
    });
}