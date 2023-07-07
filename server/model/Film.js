const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmSchema = new Schema({
    name: String,
    year: Number,
    cost: Number,
    image: String,
    description: String
})

module.exports = mongoose.model("Film", filmSchema)