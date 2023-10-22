const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/employee')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/employee')

app.get('/get', (req, res) => {
    EmployeeModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.get('/get/:id', (req, res) => {
    const { id } = req.params;
    EmployeeModel.findById(id)
        .then(result => {
            if (!result) {
                // ID'ye sahip çalışan bulunamadıysa 404 Not Found döndürün
                res.status(404).json({ error: 'Employee not found' });
            } else {
                // Çalışanı bulduysanız, sonucu JSON olarak döndürün
                res.json(result);
            }
        })
        .catch(err => {
            // Hata durumunda hata mesajını JSON olarak döndürün
            res.status(500).json({ error: err.message });
        });
})
app.post('/add', (req, res)  => {
    const { name, surname, age, salary, phone, department, email, address } = req.body;

    EmployeeModel.create({
        name: name,
        surname: surname,
        age: age,
        salary: salary,
        phone: phone,
        department: department,
        email: email,
        address: address
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req,res) => {
    const {id} = req.params;
    const { name, surname, age, salary, phone, department, email, address } = req.body;

    EmployeeModel.findByIdAndUpdate({_id: id}, {
        name: name,
        surname: surname,
        age: age,
        salary: salary,
        phone: phone,
        department: department,
        email: email,
        address: address
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    EmployeeModel.findByIdAndDelete({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is Running")
})
