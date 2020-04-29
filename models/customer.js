module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
      customerID: DataTypes.INTEGER,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING
    }, {});
    //Boxes.associate = function(models) {
      // associations can be defined here

      
    
    return Customer;
  };