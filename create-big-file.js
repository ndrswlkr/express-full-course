const {writeFileSync} = require('fs')

for( let i = 0; i < 1000000; i++){
    writeFileSync('./content/big.txt',"#" + Math.floor(Math.random()*1000)+"\n", {flag: 'a'})
}