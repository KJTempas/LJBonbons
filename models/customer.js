module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
      
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING
    }, {});
    //Boxes.associate = function(models) {
      // associations can be defined here

      Customer.sync({force: true}).then( () => {       
        console.log('synced customer table')    }) 
    
    return Customer;
  };