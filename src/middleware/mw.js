const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const BlogController =require("../controllers/blogController")


const Auth = function(req,res,next){

    let token = req.headers["x-api-key"];
    if(!token) res.status(400).send("toekn is not present");
    let decodeToken = jwt.verify(token,"functionup-thorium")
    if(!decodeToken) res.status(400).send("Invalid Token")
    next()


}
let authCheck = function(req,res,next){
    let tokenn= req.headers["x-api-key"];
    let decodedToken= jwt.verify(tokenn, "functionup-thorium")
    let toBeUpdatedUserId= req.params.autheridd;
    let loggedInUserId= decodedToken.autherid;
    if(loggedInUserId != toBeUpdatedUserId) return res.send({status:false, msg:"you are not authorized to perform this task"})
    else next()

}
module.exports.authCheck= authCheck
module.exports.Auth =Auth