const express = require('express');
const router = express.Router();
const authrModels = require("../models/newAuthor")
const publisherModels = require("../models/newPublisher")
const bookModels = require("../models/newBook")
const BookController= require("../controllers/bookController")




router.post("/author", BookController.createAuthor)
router.post("/publisher", BookController.createPublisher)
router.post("/createBook", BookController.createBook  )
router.get("/getBooksData", BookController.getBook)
router.put("/UpdOne",BookController.UpdOne)
router.put("/updatePrice",BookController.updatePrice)
module.exports = router;