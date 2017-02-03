'use strict';
module.exports = function(sequelize, DataTypes) {
  var Train = sequelize.define('Train', {
    line: DataTypes.STRING(128),
    color: DataTypes.STRING(128)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Train;
};