var express = require('express');
var router = express.Router();

const loginController = require('../app/controllers/LoginController')
//newsController.index
router.use('/',loginController.login);
module.exports = router;