var http = require('http')
var a = 23
var b = 8
var c = a + b
var msg 
if(c==31){
    msg = "Sum is 31"
}else{
    msg = "Sum is not 31"
}

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write("A val is" + a)
    res.write("B val is"+ b)
    res.write(`<br/><b>Sum is ${a+b} </b>`)
    res.end("<br/>" + msg + "Done")
}).listen(4002)
console.log("Server is started at http://127.0.0.1:4002")