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

router.get('/trains/:id', helperware.fetchComments, function(req, res, next) {
  models.Train.findById(req.params.id).then((trains) => {
    res.render('trainInfo', {
    title: 'Subwaze | Line',
    trains: trains,
    comments: res.locals.comments,
    user: req.user.dataValues
  });
  })
});

router.post('/trains/:id/comment', function(req, res, next) {
  models.Comment.create({
    user_id:req.user.dataValues.id,
    train_id:req.params.id,
    comment:req.body.comment
  }).then(function() {
    res.redirect(`/trains/${req.params.id}`)
  });
});


module.exports = router;
