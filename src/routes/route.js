const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
});
router.get("/movies",function(req,res){
    res.send('["hera pheri","Boss","R.R.R","K.G.F","Villian"]')
});
router.get("/movies/:movieId", function(req,res)
{
    mov=["hera pheri","Boss","R.R.R","K.G.F","Villian"]
    let value = req.params.movieId;
    if(value>mov.length-1){
        res.send("doesnt exist")
    }else{
        res.send(mov[value])
    }
})
router.get("/movieZ",function(req,res){
    res.send([ {id:1,name:"Avengers"},{id:2,name:"Iron Man"},{id:3,name:"Captain America"},{id:4,name:"3 idiots"},{id:5,name:"Welcome"}
]);
})
router.get("/film/:filmId",function(req, res){
    let movi=[{id:1,name:"Avengers"},{id:2,name:"Iron Man"},{id:3,name:"Captain America"},{id:4,name:"3 idiots"},{id:5,name:"Welcome"}]
    let value = req.params.filmId;
    let found =false;
    for (i=0;i<movi.length;I++){
        if ( movi[i].id===value){
            found=true;
            res.send(movi[i])
            break;
        }
    }
if(found==false)
{ res.send("No movie exists with this id")}

});


module.exports = router;

