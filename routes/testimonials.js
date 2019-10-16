var express = require('express');
var router = express.Router();
var testimunialsService = require('../services/testimonialsService');


router.get('/', function(req, res, next){
    var testimunials = testimunialsService.getTestimonials();

    var viewData = {
        title: 'Depoimentos',
        testimonials: testimonials
    };
    res.render('testimonials', viewData );
});

module.exports = router;