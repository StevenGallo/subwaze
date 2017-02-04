var express = require('express');
var router = express.Router();

var models = require('../db/models/index');
var helperware = require('./helperware');

/* GET users listing. */
router.get('/', helperware.fetchFavs, function(req, res, next) {
  res.render('user/favs', {
    user: req.user.dataValues,
    favs: res.locals.favs
  });
});

module.exports = router;

