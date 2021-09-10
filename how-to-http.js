const http = require('http')

const server = http.createServer((req, res) =>{
    let url = req.url
    console.log(url)
    res.end("congrats, you connected with http-module")

})

server.listen(5000, ()=>{console.log('listening on port 5000')})
