var express = require('express');
var router = express.Router();

var user = require('../controller/user');

router.get('/', user.getUserList);

module.exports = router;
