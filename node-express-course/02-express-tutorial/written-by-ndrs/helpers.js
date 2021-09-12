const {products, people} = require('./data.js')
const {say} = require('./say') 
let randomProduct = function(){
    let randomIndex = Math.floor(Math.random() * products.length)
    say(randomIndex + " "+ products.length)
    return products[randomIndex]
}

module.exports = {randomProduct}