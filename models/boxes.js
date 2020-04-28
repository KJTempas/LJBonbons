'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boxes = sequelize.define('Boxes', {
    boxID: DataTypes.INTEGER,
    boxSize: DataTypes.STRING,
    coating: DataTypes.STRING
  }, {});
  Boxes.associate = function(models) {
    // associations can be defined here
  };
  return Boxes;
};