var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const models = require('../db/models/index');


router.get('/', authHelpers.loginRequired, fetchFavs, (req, res, next) => {
    res.render('user/favs', {
        favs: favs
    });
});

module.exports = router;