'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Trains', [
      { line: '1', color: 'red', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: '2', color: 'red', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: '3', color: 'red', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: '4', color: 'green', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: '5', color: 'green', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: '6', color: 'green', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: '7', color: 'purple', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'A', color: 'blue', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'C', color: 'blue', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'E', color: 'blue', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'B',   color: 'orange', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'D', color: 'orange', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'F', color: 'orange', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'M', color: 'orange', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'G', color: '#29DC10', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'J', color: 'brown', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'Z', color: 'brown', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'L', color: 'gray', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'N', color: 'yellow', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'Q', color: 'yellow', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'R', color: 'yellow', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'W', color: 'yellow', createdAt: '2017-02-04', updatedAt: '2017-02-04'},
      { line: 'S', color: 'gray', createdAt: '2017-02-04', updatedAt: '2017-02-04'}
    ], {});
  }
};
