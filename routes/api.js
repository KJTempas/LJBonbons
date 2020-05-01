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
    Boxes.findAll()
    .then( boxes => {
        console.log('boxes here')
        return res.json(boxes)
    })
    .catch( err => next.err() )
})

//route to create a new order
router.post('/orders', function(req, res, next) {
    //order table needs customerID - other columns are autogenerated(orderID and datePlaced)

    let order = {customerID: req.body.customer.customerID}
    //let order = { customer: req.body.customer.id }
    let boxes = req.body.boxes
    
    Orders.create(order)
        .then( (order) =>{
            let orderItems = boxes.map(function(box) {
                return { order: order.id, boxID: box}
            })
            orderItems.bulkInsert(orderItems).then( () => {//check method name in sqlite
            //orderItems.UnionAll(orderItems).then( () => {
                //pragma?
                return res.send('inserted into order and orderItems')
            })

    })





/*let order = {customerID: this.customerID} //datePlaced: NOW  gives error; orderID is automatic
      //this.orders.push(finalOrder)  //add this final order to the array of final orders
    
      //write order to order table in dbase
      this.$orders_api.addOrder(order).then( order => {//write order to order table of dbase

      }).catch(err => {
            let msg = err.response.data.join(', ')
            alert('Error adding order.\n' + msg)
          })
          //write order Item to orderItem table in dbase
          this.boxes.forEach(function (box) {

          let OrderItem = { orderID: this.orderID, boxID: this.box.boxID}
          
       this.$orderItems_api.addOrderItem(orderItem).then( orderItem => {

       }).catch(err => {
         let msg = err.response.data.join(',')
         alert('Error adding orderItem.\n' + msg)
       })  
          })*/



module.exports = router