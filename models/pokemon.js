const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String},
    time : { type : Date, default: Date.now }
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon