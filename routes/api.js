//these are server file routes
let express = require('express')
let db = require('../models')
//let Customer = require('../models').Customer
//let Order = require('../models').Order
let Customer = db.Customer
//let Order = db.Order
let Boxes = db.Boxes
//let OrderItem = db.OrderItem

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
router.post('/boxes', function(req, res, next) {
    Box.create(req.body).then( (data) =>{
        return res.status(201).send('ok')
    
    })
})

router.get('/boxes', function(req, res, next) {
    Boxes.findAll({order: ['id']})
    .then( boxes => {
        return res.json(boxes)
    })
    .catch( err => next.err() )
})

//route to create a new order
router.post('/order', function(req, res, next) {
    Order.create(req.body).then( (data) =>{
        return res.status(201).send('ok')
    
    })
})
//route to create  a new orderItem
router.post('/orderItem', function(req, res, next) {
    OrderItem.create(req.body).then( (data) =>{
        return res.status(201).send('ok')
    
    })
})

module.exports = router