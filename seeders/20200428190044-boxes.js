'use strict';

const boxes = [
  {
      "boxID":"1",
      "boxDescription": "Size - Small; Coating - Milk Chocolate",
      "boxSize": "small",
      "coating": "milkChoc"
  },
  {
      "boxID":"2",
      "boxDescription": "Size - Small; Coating - Dark Chocolate",
      "boxSize": "small",
      "coating": "darkChoc"
  },{
      "boxID":"3",
      "boxDescription": "Size - Large; Coating - Milk Chocolate",
      "boxSize": "large",
      "coating": "milkChoc"
  },{
      "boxID":"4",
      "boxDescription": "Size - Large; Coating - Dark Chocolate",
      "boxSize": "large",
      "coating": "darkChoc"
  }, 
]
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var boxDates = boxes.map(function(b) { 
      
      b.createdAt = new Date(), 
      b.updatedAt = new Date()
      return b 
    })
    
    return queryInterface.bulkInsert('Boxes', boxes, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('Boxes', null, {});

  }
};