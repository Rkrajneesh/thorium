let url = 'http://www.google.com'

function printMyMessage(message){
    console.log(message)
}

function Welcome() {
    console.log("Welcom to my application")
}
module.exports.endpoint = url

module.exports.printMessage = printMyMessage
module.exports.printWelcomeMessage = Welcome