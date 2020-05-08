module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
      
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      streetAddress: DataTypes.STRING,
      cityStateZip: DataTypes.STRING
    }, {});
    

      Customer.sync({force: true}).then( () => {       
        console.log('synced customer table')    }) 
    
    return Customer;
  };