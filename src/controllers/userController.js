const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const tokenCheck = require("../middleware/auth");
const { send } = require("express/lib/response");

const createUser = async function (req, res) {
  try{
  let data = req.body;
  if(Object.keys(data).length >0){
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
  res.status(201).send({msg :savedData})
  }else{res.status(400).send("Bad Request")}
  }catch(error){
    res.status(500).send({msg:"Error",error:error.message})
  }
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
  let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    userData,
    { $new: true }
  );
  res.send({ data: updatedUser });
};

const deleteData = async function (req, res) {
  let userId = req.params.userId;
  let deletedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    { $set: { isDeleted: true } },
    { $new: true }
  );
  res.send({ data: deletedUser });
};


const postMessage = async function (req, res) {
 let userId = req.body.userId
 let upDatedPosts =req.body 
 let updatedUser = await userModel.findOneAndUpdate({_id: userId},upDatedPosts, {$new: true})
 res.send({status: true, data: updatedUser})
 }



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteData = deleteData;
module.exports.postMessage = postMessage;