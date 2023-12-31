const mongoose = require('mongoose')
const Schema = mongoose.Schema


const toySchema = new Schema ({
    name: String,
    type: String,
    color: String,
})

const petSchema = new Schema ({
    species: String,
    name: {type: String, required: true},
    eyeNo: {
        type: Number,
        min: 0
    },
    color: { type: String, enum: ["Brown", "Black", "Grey", "Spotted", "White", "Brindle", "Multi"] },
    interests: [String],
    // ICE BOX: owner:
    image: String,
    toys: [toySchema],
})


module.exports = mongoose.model('Pet', petSchema)