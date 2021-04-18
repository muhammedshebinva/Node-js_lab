var http=require('http')

http.createServer(hello).listen(3000)

function hello(req,res){
    res.write('shebin')
    res.end()
}