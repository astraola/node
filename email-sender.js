const emailSender = require("email-sender")
const email = emailSender.email({
    text: true
})

console.log(email);