const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const mongoose = require('mongoose');

const ProductController= require("../controllers/ProductController")
const UserController= require("../controllers/userController")
const OrderController= require("../controllers/OrderController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


const task1 = function(req,res,next){
    let isFreeAppUsers = req.headers["isfreeappuser"]
    if(isFreeAppUsers != undefined)
    { console.log("middleware 1")
        next()}

    else{res.status(426).send("missing a mandatory header")
}}

const task2 = function(req,res,next){
    let isFreeAppUsers = req.headers["isfreeappuser"]
    if(isFreeAppUsers != undefined)
    { console.log("middleware 1")}
 else{res.status(426).send("missing a mandatory header")}


 let userId = req.body["userId"]
 let ObjectId = mongoose.Types.ObjectId;
 if(ObjectId.isValid(userId )){
    if((String)(new ObjectId(userId)) === userId  )
        console.log("valid userId")
    }  else {console.log("not valid userId")}

    let productId = req.body["productId"];
 if(ObjectId.isValid(productId )){
    if((String)(new ObjectId(productId)) === productId  )
        console.log("valid Id")
    }  else {console.log("not valid Id")}
next()
}







router.post("/userDocument", UserController.createUser  )
router.get("/getUserDocument", UserController.getUsersData)

router.post("/productDocumnet",task1, ProductController.ProductData  )
router.get("/getProdectDocument", ProductController.getProductData)

router.post("/orderDocumnet",task1, OrderController.createOrder)
// router.get("/getOrderDocumnet", OrderController.getOrderData)


module.exports = router;