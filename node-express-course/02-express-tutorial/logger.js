const {say} = require('./say.js')

//req => middleware => res
//logger middleware
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    say(method, url, time)
    //turn back to initial route
    next() 
}

module.exports = logger