const mongoose = require('mongoose');

const userDocumentSchema = new mongoose.Schema( {
    
    name: {type : String},
	balance:{type : Number ,
             default : 100}, // Default balance at user registration is 100
	address: {typr : String},
	age: {type : Number},
 	gender: {type : String,
            enum:["male","female","other"]}, // Allowed values are - “male”, “female”, “other”
	isFreeAppUser: { type : Boolean ,
                    default : false }}, { timestamps: true });

module.exports = mongoose.model('UserDocument', userDocumentSchema) //users
