module.exports = (sequelize, DataTypes) => {
    const orderItems = sequelize.define('orderItems', {
      //orderItemID is auto generated
      orderID: DataTypes.INTEGER,
      boxID: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER
      
    }, {});
    orderItems.associate = function(models) {
      // associations can be defined here
      orderItems.belongsTo(Order)
    }

      orderItems.sync({force: true}).then( () => {       
        console.log('synced orderItems table')    }) 
    
    return orderItems;
  };