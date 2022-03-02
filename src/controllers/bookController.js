const { count } = require("console")
const AuthorModel= require("../models/newAuthor")
const PublisherModel= require("../models/newPublisher")
const BookModel= require("../models/newBook")

const createAuthor = async function (req, res) {
    let Adata= req.body
    let savedAuthor= await AuthorModel.create(Adata)
    res.send({msg: savedAuthor})
}

const createPublisher= async function (req, res) {
    let Pdata= req.body
    let savedPublisher= await PublisherModel.create(Pdata)
    res.send({msg: savedPublisher})}

const createBook= async function (req, res) {
        let book = req.body
        let authorId = book.author
        let publisherId = book.publisher
    
        //validation a
        if(!authorId) return res.send('The request is not valid as the author details are required.')
    
        //validation b
        let author = await AuthorModel.findById(authorId)
        if(!author) return res.send('The request is not valid as no author is present with the given author id')
    
        //validation c
        if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 
    
        //validation d
        let publisher = await PublisherModel.findById(publisherId)
        if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')
    
        let bookCreated = await BookModel.create(book)
        return res.send({data: bookCreated})
    }
    
        // let savedBook= await BookModel.create(data)
        // res.send({msg: savedBook})}

        
const getBook= async function (req, res) {
    let savedBook= await BookModel.find().populate('author publisher')
    res.send({msg: savedBook})}
        
        
module.exports.createAuthor= createAuthor
module.exports.createPublisher= createPublisher        
module.exports.createBook= createBook
module.exports.getBook = getBook

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }





// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



