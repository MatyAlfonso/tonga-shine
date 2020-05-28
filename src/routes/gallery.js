var express = require('express');
var router = express.Router();

// galleryController

var galleryController = require('../controllers/galleryController');

/* GET users listing. */
router.get('/', galleryController.gallery);

module.exports = router;

