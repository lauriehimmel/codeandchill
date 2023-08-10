const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    image: String
})

module.exports = mongoose.model('Pet', petSchema)