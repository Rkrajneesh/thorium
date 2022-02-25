function trim() {
    let name = 'Rajneesh rahul kumar'
    console.log('Trimmed name is:', name.trim())
}

function changeToLowerCase() {
    let name = 'RAJNEESH'
    console.log('Name in lowercase is:', name.toLowerCase())
}

function changeToUpperCase() {
    let name = 'Rajneesh'
    console.log('Name in uppercase is: ', name.toUpperCase())
}

module.exports.trim = trim
module.exports.changeToLowerCase = changeToLowerCase
module.exports.changeToUpperCase = changeToUpperCase