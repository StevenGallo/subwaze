var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
var helperware = require('./helperware');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Subwaze' });
});

router.get('/trains', function(req, res, next) {
  models.Train.findAll({}).then((trains) => {
    res.render('trainLines', {
    title: 'Select A Train',
    trains:trains
  });
  })
});

router.get('/trains/:id', helperware.userRedirect, helperware.fetchComments, function(req, res, next) {
// passing a few helper function in on this one..the first checks to see if user is logged in, if so user is redirected to user route,
// if not index route is rendered,
  models.Train.findById(req.params.id).then((trains) => {
    res.render('trainInfo', {
    title: 'Subwaze | Line',
    trains: trains,
    comments: res.locals.comments,
    user: 'not logged in'
  });
  })
});

module.exports = router;
