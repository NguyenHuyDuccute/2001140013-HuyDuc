var express = require('express');
var router = express.Router();

const coursesController = require('../app/controllers/CoursesController')
//newsController.index
router.use('/',coursesController.index);

module.exports = router;