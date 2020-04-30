module.exports = (sequelize, DataTypes) => {
    const orderItems = sequelize.define('orderItems', {
      //orderItemID is auto generated
      orderID: DataTypes.integer,
      boxID: DataTypes.integer,
      
    }, {});
    orderItems.associate = function(models) {
      // associations can be defined here
      orderItems.belongsTo(Order)
    }
    
      OrderItem.sync({force: true}).then( () => {       
        console.log('synced orderItems table')    }) 
    
    return orderItems;
  };