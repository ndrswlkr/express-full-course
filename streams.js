const {say} = require('./say.js')

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark:10, encoding: 'utf8'})

stream.on('data', (result)=>{
    say(result.length)
    say(" got   :    " + result)
})

stream.on('error', () => {
    console.log(err)
})