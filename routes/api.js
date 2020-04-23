//these are server file routes
let express = require('express')
let db = require('../models')
//let Customer = require('../models').Customer
//let Order = require('../models').Order
let Customer = db.Customer
let Order = db.Order
let Box = db.Box
let OrderItem = db.OrderItem

let router = express.Router()

//create a new customer w a post route to /customers; return status 201/ok if works
router.post('/customer', function(req, res, next) {
    Customer.create(req.body).then( (data) => {
        return res.status(201).send('ok')
    }).catch( err => {
        console.log(err)
        if(err instanceof Sequelize.ValidationError) {
            let message = err.errors.map( (e) => e.message)
            return res.status(400).json(message)
        }
        return next (err)
    })
})
//a route to post a new box
router.post('/box', function(req, res, next) {
    Box.create(req.body).then( (data) =>{
        return res.status(201).send('ok')
    
    })
})

//route to create a new order
router.post('/order', function(req, res, next) {
    Order.create(req.body).then( (data) =>{
        return res.status(201).send('ok')
    
    })
})
//route to createnpm  a new orderItem
router.post('/orderItem', function(req, res, next) {
    OrderItem.create(req.body).then( (data) =>{
        return res.status(201).send('ok')
    
    })
})

module.exports = router