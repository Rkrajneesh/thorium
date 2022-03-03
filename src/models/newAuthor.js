const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema( {
    authorName : String,
    age : Number,
    address : String,
    rating: Number
})


module.exports = mongoose.model('newAuthor', AuthorSchema) //users
