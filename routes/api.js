let express = require('express')
let db = require('../models')
let Customer = db.Customer
let Orders = db.Orders

let router = express.Router()

//create a new customer w a post route to /customers; return status 201/ok if works
router.post('/customers', function(req, res, next) {
    Customer.create(req.body).then( (data) => {
        return res.status(201).send('ok')
    })
})

router.post('/orders', function(req, res, next) {
    Orders.create(req.body).then( (data) =>{
        return res.status(201).send('ok')
    
    })
}

module.exports = router