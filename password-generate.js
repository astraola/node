const generatePassword = require("generate-password")
const passsword = generatePassword.generate({
    length: 10,
    numbers: true,
});
console.log("password")