var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
/* GET home page. */


function fetchComments (req,res,next) {
  models.sequelize.query('SELECT "Users"."firstName", "Comments"."id", "Comments"."comment",  "Comments"."createdAt", "Comments"."likes", "Comments"."dislikes", "Comments"."updatedAt" FROM "Comments" JOIN "Users" ON "Users"."id" = "Comments"."user_id" JOIN "Trains" ON "Comments"."train_id" = "Trains"."id" WHERE "Trains"."id" = :id', {
    replacements: { id: req.params.id },
    type: models.sequelize.QueryTypes.SELECT
  }).then((comments) => {
    res.locals.comments = comments;
    return next();
  });
}

function fetchFavs (req,res,next) {
  models.sequelize.query('SELECT "Trains"."line", "Users"."firstName", "Trains"."id", "Trains"."color" FROM "Trains" JOIN "Favorites" ON "Favorites"."train_id" = "Trains"."id" JOIN "Users" ON "Favorites"."user_id" = "Users"."id" WHERE "Users"."id" = :id', {
    replacements: { id: req.user.dataValues.id }, /// replaces :id in the query
    type: models.sequelize.QueryTypes.SELECT
  }).then((favs) => {
    res.locals.favs = favs;
    return next();
  });
}

function fetchFavsArray (req,res,next) {
  models.sequelize.query('SELECT "Trains"."line", "Users"."firstName", "Trains"."id" FROM "Trains" JOIN "Favorites" ON "Favorites"."train_id" = "Trains"."id" JOIN "Users" ON "Favorites"."user_id" = "Users"."id" WHERE "Users"."id" = :id', {
    replacements: { id: req.user.dataValues.id }, /// replaces :id in the query
    type: models.sequelize.QueryTypes.SELECT
  }).then((arr) => {
    let array = [];
    arr.forEach((item) => {
      array.push(item.id)
    })
    res.locals.favsArray = array;
    return next();
  });
}

function userRedirect(req, res, next) {
  // show page functionality depends on distinguishing between logged in user, and non logged in user
  // logged in user will be sent to the same ejs through a different route
    if (req.user) {
      res.redirect(`/user/trains/${req.params.id}`);
    }
    return next();
}

module.exports = {
  fetchComments,
  fetchFavs,
  userRedirect,
  fetchFavsArray
}

