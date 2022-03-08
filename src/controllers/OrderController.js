const { count } = require("console")
const OrderModel= require("../models/OrderDocModel")

const OrderData= async function (req, res) {
    let data= req.body
    let savedData= await OrderModel.create(data)
    res.send({msg: savedData})
}

const getOrderData= async function (req, res) {
    let ProductData= await OrderModel.find()
    res.send({msg: getOrderData})
}

module.exports.getOrderData= getOrderData
module.exports.OrderData= OrderData

