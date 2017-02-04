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

router.get('/trains/:id', helperware.fetchComments, function(req, res, next) {
  models.Train.findById(req.params.id).then((trains) => {
    res.render('trainInfo', {
    title: 'Subwaze | Line',
    trains: trains,
    comments: res.locals.comments
  });
  })
});

module.exports = router;
