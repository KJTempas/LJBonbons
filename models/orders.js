module.exports = (sequelize, DataTypes) =>{

let Order = sequelize.define('Order', {
    orderNumber: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    customerID: {

    },
    boxNumber:{

    },//an array

});
Order.associate = function(models) {
    Order.belongsTo(models.Customer, {
        foreignKey: 'customerId',
    })
}

Order.sync({force: true}).then(() => {
    console.log('synced order table')
})

return Order
}
