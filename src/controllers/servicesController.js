const express = require('express');
const router = express.Router();

let servicesController = {

    services : function(req, res) {
        res.render('services');
    }
    
}

module.exports = servicesController;