module.exports = (sequelize, DataTypes) =>{

    let Customer = sequelize.define('Customer', {
        firstName: {
            type: DataTypes.STRING,
        }, 
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING
        }
    })

    
    Customer.sync({force: true}).then(() => {
        console.log('synced customer table')

    })
    return Customer


    
}