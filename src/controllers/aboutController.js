const express = require('express');
const router = express.Router();

let aboutController = {

    about : function(req, res) {
        res.render('about');
    }
    
}

module.exports = aboutController;