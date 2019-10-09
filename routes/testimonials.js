var express = require('express');
var router = express.Router();
var testimunialsService = require('../services/testimonialsService');


router.get('/', function(req, res, next){
    var testimunialsService = testimunialsService.getTestimonials();

    var viewData = {
        title: 'Depoimentos',
        testimonials: testimonials
    };
    res.render('testimonials', )
});