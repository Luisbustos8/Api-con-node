'use strict';

const mongoose = require('mongoose')


const adSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    photo: String
})



const Ad =  mongoose.model('Ad', adSchema)


module.exports = Ad;