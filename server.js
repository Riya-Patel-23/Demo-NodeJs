var http = require('http') // http is core module.

http.createServer((req,res)=>{
    res.end("<h1>Hello Node Servers 123 </h>")
}).listen(4000)

console.log("Server is started on https://127.0.0.1:4000")