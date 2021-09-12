console.log('Express Tutorial')

const {say} = require('./say.js')
const express = require('express')

const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')


app.use(morgan('tiny'))
app.use(express.static('./public'))
//use logger middleware in all routes
//app.use(logger)

//use logger middleware on some routes
//app.use(["/api", "/"], logger, authorize)

//aplied middleware
//app.get('/', logger, (req, res) =>{
app.get('/', (req, res) =>{
    
    res.send('Home Page')
})

//about route
app.get('/about', (req, res) =>{
    res.send('About Page')
})

app.get('/api/products', (req,res) => {
    //say(req.user.name, req.user.id)
    res.send('products')
})

app.get('/api/items', (req,res) => {
    res.send('items')
})

//start the server
app.listen(5000, () => { 
    say('server listening on Port 5000')
})