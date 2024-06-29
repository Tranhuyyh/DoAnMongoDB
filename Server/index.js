const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ProductModel = require('./models/Products')
const UserModel = require('./models/Sercurity')

const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/crud');




app.get('/Shop', (req, res) => {
    ProductModel.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
})
app.get('/Admin', (req, res) => {
    ProductModel.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
})



app.get('/getProduct/:id', (req, res) => {
    const id = req.params.id;
    ProductModel.findById({ _id: id })
        .then(products => res.json(products))
        .catch(err => res.json(err))
})

app.put('/updateProduct/:id', (req, res) => {
    const id = req.params.id;
    ProductModel.findByIdAndUpdate({ _id: id },
        {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            color: req.body.color,
            category: req.body.category,
            image: req.body.image
        })
        .then(products => res.json(products))
        .catch(err => res.json(err))
})


app.delete('/deleteProduct/:id', (req, res) => {
    const id = req.params.id;
    ProductModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})


app.post("/createProduct", (req, res) => {
    ProductModel.create(req.body)
        .then(products => res.json(products)).catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    UserModel.findOne({username: username})
    .then(user => {
        if(user){  
            if(user.password === password){
                res.json("Login successfully")
            } else{
                res.json("The password is incorrect");
            }
        }else{
            res.json("No useName existed")
        }
    })
})

app.get('/Logout', (req, res) => {
    UserModel.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
})


//role





app.listen(3001, () => {
    console.log("Server is running")
})  