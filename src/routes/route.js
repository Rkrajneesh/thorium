const express = require('express');
const router = express.Router();
const jwt = require ("jsonwebtoken")
const AuthorController= require("../controllers/authorController")
const BlogController= require("../controllers/blogController")
const tokenVer = require("../middleware/mw")


router.post("/authors",         AuthorController.createAuthor)
// router.get("/bookList", BookController.bookList)
router.post("/blogs",           BlogController.createBlog)
router.get("/blogs",            tokenVer.Auth, tokenVer.authCheck ,    BlogController.getAllBlogs)
router.put("/blogs/:blogId",    tokenVer.Auth, tokenVer.authCheck,     BlogController.updateBlog)
router.delete("/blogs/:blogId", tokenVer.Auth, tokenVer.authCheck,     BlogController.deleted)
router.delete("/blogs",         tokenVer.Auth, tokenVer.authCheck ,    BlogController.Qdeleted)
router.post("/loginUser",       BlogController.loginUser)



// router.post("/getParticularBooks", BookController.getParticularBooks)

// router.get("/getXINRBooks", BookController.getXINRBooks)

// router.get("/getRandomBooks", BookController.getRandomBooks)
module.exports = router;