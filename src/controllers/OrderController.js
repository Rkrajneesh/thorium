const OrderModel= require("../models/orderDocModel")
const ProductModel = require("../models/productDocModel")
const UserModel = require("../models/userDocModel")

const createOrder= async function (req,res){
    let u_id= req.body.userId
    let p_id= req.body.productId
    let data= req.body
    let header= req.headers

    const userVerified= await UserModel.find({_id:u_id}).select({_id:1})
    const productVerified= await ProductModel.find({_id:p_id}).select({_id:1})
    

    if(userVerified.length>0 && productVerified.length>0){
        if (header["isfreeappuser"]==="true"){
            data.amount=0
            data.isFreeAppUser=true
            const result= await OrderModel.create(data)
            res.send({newOrder: result})
        }
        else if (header["isfreeappuser"]==="false") {                                                //freeappuser!==true
            const price= await ProductModel.find({_id:p_id}).select({price:1, _id:0})
            const newprice= price[0].price
            const bal= await UserModel.find({_id:u_id}).select({balance:1, _id:0})
            const newbalance= bal[0].balance
            
            if(newbalance>=newprice){                                                                          //has sufficient balance
                const newBal= UserModel.find({_id:u_id},{$set:{balance:(newbalance-newprice)}},{$new:true})
                data.amount= newprice
                data.isFreeAppUser= false
                const outcome= await OrderModel.create(data)
                res.send({newOrd: outcome})
            }
            else {
                res.send("The user does not have sufficient balance to place the order")
            }

        }


    }
    else {res.send("The user or The product does  not exist")}



}
// const { count } = require("console")
// const OrderModel= require("../models/OrderDocModel")

// const OrderData= async function (req, res) {
//     let data= req.body
//     let savedData= await OrderModel.create(data)
//     res.send({msg: savedData})
// }

// const getOrderData= async function (req, res) {
//     let ProductData= await OrderModel.find()
//     res.send({msg: getOrderData})
// }

// module.exports.getOrderData= getOrderData
module.exports.createOrder= createOrder

