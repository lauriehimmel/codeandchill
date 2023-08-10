const mongoose = require('mongoose')
const Schema = mongoose.Schema

const toySchema = new Schema ({
    name: String,
    type: String,
    color: String,
})

const petSchema = new Schema ({
    species: String,
    name: String,
    eyeNo: {
        type: Number,
        min: 0
    },
    color: String,
    interests: [String],
    // ICE BOX: owner:
    image: String,
    toys: [toySchema],
})

module.exports = mongoose.model('Pet', petSchema)