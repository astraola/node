console.log("HELLO WORLD");

const http = require('http')
const port = 3000;

http.createServer((req, res) => {
    res.end(<h1>Hello Node!!!!</h1>)
}).listen(port, ()=> {
    console.log('server started')
})