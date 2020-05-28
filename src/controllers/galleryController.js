const express = require('express');
const router = express.Router();

let galleryController = {

    gallery : function(req, res) {
        res.render('gallery');
    }
    
}

module.exports = galleryController;