const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

var customerSchema = new mongoose.Schema(
    {
        _id: { type: Number },
        FirstName:
        {
            type: String,
            required: "This is Field Required"
        },
        LastName:
        {
            type: String,
            required: "This is Field Required"
        },
        Username:
        {
            type: String,
            required: "This is Field Required" , 
            unique : true
        },
        Email:
        {
            type: String,
            required: "This is Field Required",
            unique : true

        },
        Password: {
            type: String, required: "This is Field Required",
            minlength: [6, 'Password must be at least 6 character Long ']
        },
        Phone:
        {
            type: String,
            required: "This is Field Required" ,
            unique : true
        },
        Address:
        {
            type: String,
            required: "This is Field Required"
        },

    });

customerSchema.path('Email').validate((val) => {
    emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return emailRegex.test(val);
}, 'Invalid email');

var customer = mongoose.model("Customer", customerSchema, "Customer")

module.exports = customer;