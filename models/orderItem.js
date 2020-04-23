module.exports = (sequelize, DataTypes) =>{

let OrderItem = sequelize.define('OrderItem', {
    orderItemID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    orderID:{
        type: DataTypes.INTEGER
    },
});

        OrderItem.associate = function(models) {
            OrderItem.belongsTo(models.Order, {
                foreignKey: 'orderId',
            })
        }
        
        OrderItem.sync({force: true}).then(() => {
            console.log('synced orderItem table')
        })
        
        return OrderItem
        }


       