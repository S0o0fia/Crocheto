var Order = require("../models/model.order");
var OrderDetail = require("../models/model.orderdetails");
var Customer = require("../models/model.customer");
var Product = require("../models/model.product");
var customerId;
var orderCount = 0;
var orderDetailsDount = 0;
module.exports.addCart = function (req, res) {

  //Getting Customer Id 
  Customer.findOne({ Email: req.body.Email }, function (err, result) {
    if (err)
      console.log(err);
    else
      customerId = result._id;
  });

  //object from Order Schema
  var order = new Order();  
  order._id = ++orderCount;
  order.date = Date.now();
  order.custmoerID = customerId;
  //add order 
  order.save((err, doc) => {
    if (err) {
      console.log(err);

    }
    else {

      //object from Order Schema
      var orderdetails = new OrderDetail();
      orderdetails._id = ++orderDetailsDount;
      orderdetails.OrderID = orderCount;
      orderdetails.ProductID = req.body.ProductID;
      orderdetails.Qunatity = req.body.Qunatity;
      orderdetails.Price = req.body.Price;
      orderdetails.save((err, doc) => {
        if (!err)
          res.send(doc);
        else
          console.log(err);
      });

    }
  });
}

