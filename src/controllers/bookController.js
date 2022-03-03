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
        let bookDetail = req.body
        let authorId = bookDetail.author
        let publisherId = bookDetail.publisher
    
    
        if(!authorId) return res.send('The request is not valid as the author details are required.')
    
    
        let author = await AuthorModel.findById(authorId)
        if(!author) return res.send('The request is not valid as no author is present with the given author id')
    
    
        if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 
    
        let publisher = await PublisherModel.findById(publisherId)
        if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')
    
        let bookCreated = await BookModel.create(book)
        return res.send({data: bookCreated})
    }
    
        // let savedBook= await BookModel.create(data)
        // res.send({msg: savedBook})}


const UpdOne = async function(req,res) {
        const update = await BookModel.updateOne(
        { $and: [{"newBook": "62208e6bf71312b5b71d5183"}/*, {"newBook": "6220b029a1577ddacb5d6f59"}*/]},
             {"isHardCover": true}, {new: true})
        res.send(update)
    } 

    const updatePrice = async function (req, res) {
        const newPrice = await BookModel.findOneAndUpdate({ rating: {$gte: 3.5}},{price: +30 },{new: true})
        res.send(newPrice)
    }



        
const getBook= async function (req, res) {
    let savedBook= await BookModel.find().populate('author publisher')
    res.send({msg: savedBook})}
        
        
module.exports.createAuthor= createAuthor
module.exports.createPublisher= createPublisher        
module.exports.createBook= createBook
module.exports.getBook = getBook
module.exports.UpdOne = UpdOne
module.exports.updatePrice = updatePrice
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



