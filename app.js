const http = require('http')
const {createReadStream} = require('fs')
const {readFileSync} = require('fs')

console.log('hello people ')

const server = http.createServer((req, res) =>{
    let url = req.url
    console.log(url)
    //stream.on('data', (result)
    //const text = readFileSync('./content/big.txt', 'utf8')
    const stream = createReadStream('./content/big.txt', {encoding: 'utf8'})
    stream.on('open', () => {
        stream.pipe(res)
    })
    stream.on('error', () =>{
        res.end(err)
    })
    

})

server.listen(5000, ()=>{console.log('listening on port 5000')})
