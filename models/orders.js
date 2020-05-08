module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
      //orderID automatically generated
      
      customerID: DataTypes.INTEGER
    }, {});
    Orders.associate = function(models) {
      // associations can be defined here
      Orders.belongsTo(Customer)
    };
  
  Orders.sync({force: true}).then( () => {        
    console.log('synced orders table')    })
  
    return Orders;
  };