const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema ({
    title: {
        type: String
    },
    author: {
        type: String
    },
    genre: {
        type: String,
        default: "fiction"
    }
 }, {
    timestamps: true
})

module.exports = mongoose.model("Book", bookSchema)