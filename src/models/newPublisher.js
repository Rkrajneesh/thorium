const mongoose = require('mongoose');

const PublisherSchema = new mongoose.Schema( {
   
    name : String,
    address: String
})


module.exports = mongoose.model('newPublisher', PublisherSchema) //users
