console.log('Express Tutorial')

const {say} = require('./say.js')
const express = require('express')
const {products, people} = require('./data.js')
const {randomProduct} = require('./helpers.js')
const app = express()



app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1><a href ="/api/products">Products</a> <a href ="/api/products/1">first Product</a> <a href ="/api/randomProduct">random product</a>')
})

//api sends json
app.get('/api/randomProduct', (req, res) => {
    const {id, name, image} = randomProduct()
    res.json({id, name, image})
})

//api reduced product - all products
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

//product by id with placeholder
app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params 
    const singleProduct = products.find((product) => product.id === Number(productID))
    if(!singleProduct){
        res.status(404).send('Product '+productID+ ' does not exist')
    }
    res.json(singleProduct)
})


//nested placeholders
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    say(req.params)
    res.send('hello world')
})

//fallback for unmatched requests
app.all('*', (req, res)=>{
    res.status(404).send('<h3>Page '+ req.url +' is inavailable</h3>')
})

//start the server
app.listen(5000, () => { 
    say('server listening on Port 5000')
})