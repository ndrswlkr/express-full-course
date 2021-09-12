//authorize.js
//middleware
const {say} = require('./say.js')

const authorize = (req, res, next)=>{
    say("AUTHORIZE "+req.url)
    const {user} = req.query
    if(user === 'ndrs'){
        req.user= {name:"ndrs", id:3}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize