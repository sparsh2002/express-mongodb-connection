const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name_s:{
        type:String,
        required:true
    },
    phoneNo_s:{
        type:String,
        required:true
    },
    Email_s:{
        type:String,
        required:true,
        unique:true
    },
    username_s:{
        type:String,
        required:true,
        unique:true
    },
    address_s:{
        type:String,
        required:true
    },
    state_s:{
        type:String,
        required:true
    },
    district_s:{
        type:String,
        required:true
    }

});

const Register = new mongoose.model("Register",employeeSchema);

module.exports = Register;