var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
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

router.get('/trains/:id', function(req, res, next) {
  models.Train.findById(req.params.id).then((trains) => {
    res.render('trainInfo', {
    title: 'Subwaze | Line',
    trains: trains
  });
  })
});

module.exports = router;
