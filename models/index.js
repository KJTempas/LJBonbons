//this file connects to the dbase, and keeps track of models in the app
let Sequelize = require('sequelize')

let env = process.env.NODE_ENV || 'development'
let config = require(__dirname + '/../config.json')[env]

let db = []

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config)

}else {
    sequelize = new Sequelize(config)
}
//the four tables in the database with links to files with their mapping
let customerModel = sequelize['import']('./customer.js')
let boxesModel = sequelize['import']('./boxes.js')
let ordersModel = sequelize['import']('./orders.js')
let orderItemsModel = sequelize['import']('./orderItems.js')

db[customerModel.name] = customerModel
db[boxesModel.name] = boxesModel
db[ordersModel.name] = ordersModel
db[orderItemsModel.name]=orderItemsModel

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db