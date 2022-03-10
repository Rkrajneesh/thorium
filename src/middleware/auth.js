
const jwt = require("jsonwebtoken");

let tokenCheck= function (req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
   
    let decodedToken = jwt.verify(token, 'functionup-thorium')
    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
   
    else {next()}
    }
    
let authCheck = function(req,res,next){
 


    let tokenn= req.headers["x-auth-token"];
    let decodedToken= jwt.verify(tokenn, "functionup-thorium")
    let toBeUpdatedUserId= req.params.userId;
    let loggedInUserId= decodedToken.userId;
    if(loggedInUserId != toBeUpdatedUserId) return res.send({status:false, msg:"you are not authorized to perform this task"})
    else {next()}

}

    
    module.exports.tokenCheck= tokenCheck
    module.exports.authCheck = authCheck