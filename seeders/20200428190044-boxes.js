'use strict';

const boxes = [
  {
      "boxID":"1",
      "boxSize": "small",
      "coating": "milkChoc"
  },
  {
      "boxID":"2",
      "boxSize": "small",
      "coating": "darkChoc"
  },{
      "boxID":"3",
      "boxSize": "large",
      "coating": "milkChoc"
  },{
      "boxID":"4",
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