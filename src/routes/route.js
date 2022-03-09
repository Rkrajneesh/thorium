const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const userController= require("../controllers/userController");
const tokenCheckk = require('../middleware/auth');



router.post("/createUser", userController.createUser  )
router.post("/loginUser", userController.loginUser)
router.get("/users/:userId", tokenCheckk.tokenCheck, userController.getUserData)
router.put("/users/:userId", tokenCheckk.tokenCheck,tokenCheckk.authCheck, userController.updateUser)
router.delete("/users/:userId", tokenCheckk.tokenCheck,tokenCheckk.authCheck, userController.deleteData)
router.post("/userss/:userId",tokenCheckk.tokenCheck,tokenCheckk.authCheck,userController.postMessage)
module.exports = router;

//,tokenCheckk.tokenCheck