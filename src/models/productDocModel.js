const mongoose = require('mongoose');

const ProductDocSchema = new mongoose.Schema( {
    name:{ type : String },
	category:{ type : String },
	price:{ type : Number ,
            require: true}

}, { timestamps: true });


module.exports = mongoose.model('productDoc', ProductDocSchema) //users
