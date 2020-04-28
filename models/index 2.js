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
let boxModel = sequelize['import']('./box.js')
let orderModel = sequelize['import']('./order.js')
let orderItemModel = sequelize['import']('./orderItem.js')

db[customerModel.name] = customerModel
db[boxModel.name] = boxModel
db[orderModel] = orderModel
db[orderItemModel]=orderItemModel

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db