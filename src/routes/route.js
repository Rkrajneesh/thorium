const express = require('express');
const router = express.Router();

// QUERY PARAMS
// localhost:3000/get-query-1?myCoolVar=24&xyz=hiFunctionUP
router.get("/get-query-1", function (req, res) {
    let data = req.query
    console.log(data)
    res.send({ data: data, status: true })
})

// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote


let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]

router.post("/election", function (req, res) {
    let votingAge = req.query.votingAge

    let rajneesh=[];
    for (let i = 0; i < persons.length; i++) {

        if (persons[i].age > votingAge) {
        
            persons[i].votingStatus = true
            rajneesh.push(persons[i])
        }
    }
if (rajneesh.length>0)
{
    return res.send(rajneesh)
}
else{
    return res.send("no member found above this age")
}

})




module.exports = router;