const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    department: String,
    name: String,
    surname: String,
    age: Number,
    salary: Number,
    address: String,
    email: String,
    phone: {
        type: String,
        maxlength: 11
    }
});


const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel