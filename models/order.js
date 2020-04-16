'use strict'
module.exports = (sequelize, DataTypes) =>{

const Box = sequelize.define('Box', {
    boxID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    boxSize: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coating: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
Box.associate = function(models) {
    Box.belongsTo(models.Customer, {
        foreignKey: 'customerId',
    })

}

Box.sync({force: true}).then(()=> {
    console.log('synced box table')
})

return Box
}