module.exports = (sequelize, DataTypes) =>{

    let Order = sequelize.define('Order', {
        orderID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        datePlaced: {
            type: DataTypes.DATEONLY,  
            allowNull: false,
            defaultValue: new Date()
        },
        //customerID: {
            //type: DataTypes.INTEGER
        //}
    });
    Order.associate = function(models) {
        Order.belongsTo(models.Customer, {
            foreignKey: 'customerId',
        })
    
    }
    
    Order.sync({force: true}).then(()=> {
        console.log('synced order table')
    })
    
    return Order
    }