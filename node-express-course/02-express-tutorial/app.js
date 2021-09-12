console.log('Express Tutorial')

const {say} = require('./say.js')
const express = require('express')

const app = express()
const morgan = require('morgan')
let {people} = require('./data')


app.get('/api/people', (req,res) => {
    res.json(people)
})

//start the server
app.listen(5000, () => { 
    say('server listening on Port 5000')
})