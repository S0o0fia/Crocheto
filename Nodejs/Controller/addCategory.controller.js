const Category = require("../models/model.category");

var count = 0;

module.exports.addCategory = function(req , res)
{
    Category.find({}, function(err , result)
    {
           if(!err)
           {
               result.forEach((c)=>{
                   count = c._id;
               });
               console.log(count);
               var category = new Category();
               category._id = ++count;
               category.Name  = req.body.Name;
               
               category.save((err, result)=>
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
