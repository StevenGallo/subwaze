var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Subwaze' });
});

router.get('/trains', function(req, res, next) {
  res.render('trainLines', {
    title: 'Select A Train'
  });
});

router.get('/trains/:id', function(req, res, next) {
  res.render('trainInfo', {
    title: 'Train View'
  });
});

module.exports = router;
