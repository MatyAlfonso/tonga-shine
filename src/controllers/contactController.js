const express = require('express');
const router = express.Router();

let contactController = {

    contact : function(req, res) {
        res.render('contact-us');
    }
    
}

module.exports = contactController;