const { count } = require("console")
const ProductModel= require("../models/productDocModel")

const ProductData= async function (req, res) {
    let data= req.body
    let savedData= await ProductModel.create(data)
    res.send({msg: savedData})
}

const getProductData= async function (req, res) {
    let ProductData= await ProductModel.find()
    res.send({msg: ProductData})
}

module.exports.getProductData= getProductData
module.exports.ProductData= ProductData

