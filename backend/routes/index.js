var express = require('express');
var router = express.Router();

// index page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// define sperated router
var userRouter = require('./users');
router.use('/users', userRouter);

module.exports = router;
