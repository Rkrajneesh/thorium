const mongoose = require('mongoose');

const OrderDocSchema = new mongoose.Schema( {
    userId: { type : mongoose.Schema.Types.ObjectId ,
                ref : "UserDocument"} ,
    productId: { type :  mongoose.Schema.Types.ObjectId,
                ref : "productDoc" } ,
    amount: { type : Number},
    isFreeAppUser: {type : Boolean}, 
    date: {type : Date ,
        default :Date.now},
});


module.exports = mongoose.model('OrderDoc', OrderDocSchema) //users
