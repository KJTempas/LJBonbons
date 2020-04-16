'use strict'
module.exports = (sequelize, DataTypes) =>{
    
    const Customer = sequelize.define('Customer', {
        customerId: {
            allowNull: false,
            autoIncrement: tyrue,
            primaryKey: true,
            type: sequelize.INTEGER
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })

    
    Customer.sync({force: true}).then(() => {
        console.log('synced customer table')

    })
    return Customer


    
}