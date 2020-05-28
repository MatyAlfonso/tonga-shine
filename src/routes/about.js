var express = require('express');
var router = express.Router();

// aboutController

var aboutController = require('../controllers/aboutController');

/* GET users listing. */
router.get('/', aboutController.about);

module.exports = router;
