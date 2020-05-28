var express = require('express');
var router = express.Router();

// aboutController

var servicesController = require('../controllers/servicesController');

/* GET users listing. */
router.get('/', servicesController.services);

module.exports = router;
