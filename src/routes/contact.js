var express = require('express');
var router = express.Router();

// contactController

var contactController = require('../controllers/contactController');

/* GET users listing. */
router.get('/', contactController.contact);

module.exports = router;
