const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
var moment =require("moment")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//<!-- ASSIGNMENT:- -->
//Write a middleware that logs (console.log) some data everytime any API is hit
//Data to be logged:-the current timestamp(as date time) , the IP of the user and the route being requested).
//2010-08-19 14:00:00 , 123.459.898.734 , /createUser




const malwr =function(req,res,next){
const time =moment().format('DD-MM-YYYY, h:mm:ss a');
const type =req.originalUrl;
const ip = req.ip;
console.log(time,ip,type)}
app.use(malwr)





mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )






app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
