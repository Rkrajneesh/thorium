const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const { tokenCheck } = require('../middleware/auth');



router.post("/createUser", userController.createUser  )
router.post("/loginUser", userController.loginUser)
router.get("/users/:userId", tokenCheck, userController.getUserData)
router.put("/users/:userId", tokenCheck, userController.updateUser)
router.delete("/users/:userId", tokenCheck, userController.deleteData)

module.exports = router;