const mongoose = require('mongoose');

const PoductSchema = new mongoose.Schema({

    name: String,
    description: String,
    price: Number,
    color: String,
    category: String,
    image: String
})


const ProductModel = mongoose.model("products", PoductSchema)
module.exports = ProductModel