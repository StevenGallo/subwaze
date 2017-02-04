var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
/* GET home page. */


function fetchComments (req,res,next) {
  models.sequelize.query('SELECT "Users"."firstName", "Comments"."comment",  "Comments"."createdAt", "Comments"."likes", "Comments"."dislikes", "Comments"."updatedAt" FROM "Comments" JOIN "Users" ON "Users"."id" = "Comments"."user_id" JOIN "Trains" ON "Comments"."train_id" = "Trains"."id"', {
    type: models.sequelize.QueryTypes.SELECT
  }).then((comments) => {
    res.locals.comments = comments;
    return next();
  });
}

function fetchFavs (req,res,next) {
  models.sequelize.query('SELECT "Trains"."line", "Users"."firstName", "Trains"."id" FROM "Trains" JOIN "Favorites" ON "Favorites"."train_id" = "Trains"."id" JOIN "Users" ON "Favorites"."user_id" = "Users"."id" WHERE "Users"."id" = :id', {
    replacements: { id: req.user.dataValues.id }, /// replaces :id in the query
    type: models.sequelize.QueryTypes.SELECT
  }).then((favs) => {
    res.locals.favs = favs;
    return next();
  });
}

module.exports = {
  fetchComments,
  fetchFavs
}

