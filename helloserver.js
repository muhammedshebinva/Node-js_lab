var http=require('http')

var fs=require('fs')

http.createServer(function hello(req,res){
    fs.readFile('hellohtml.html',function(err,data){
       res.writeHead(200,{"content-Type":'text/html'})
        res.write(data)
        res.end()
    })
}).listen(4000)

