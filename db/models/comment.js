'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    user_id: DataTypes.BIGINT,
    train_id: DataTypes.BIGINT,
    comment: DataTypes.STRING(255),
    likes: DataTypes.BIGINT,
    dislikes: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Comment;
};