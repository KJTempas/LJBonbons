'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boxes = sequelize.define('Boxes', {
    boxDescription: DataTypes.STRING,
    boxSize: DataTypes.STRING,
    coating: DataTypes.STRING
  }, {});
  Boxes.associate = function(models) {
    // associations can be defined here
    Boxes.belongsTo(Customer)
  };



Boxes.sync({force: true}).then( () => {        
  console.log('synced boxes table')    })



  return Boxes;
};