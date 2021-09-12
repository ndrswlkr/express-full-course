const http = require('http')
//create server
const server = http.createServer((req, res) => {
    let url = req.url
    if (url === '/') {
        res.end('Home Page')
    } else if (url === '/about') {
        //Blocking Code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(` ${i} ${j}`)
            }
        }
        res.end('About Page')
    } else {
        res.end("congrats, you connected with http-module")
    }
})
//start listening
server.listen(5000, () => {
    console.log('listening on port 5000')
})