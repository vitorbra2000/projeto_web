var express = require('express');
var router = express.Router();
var postsService = require('../../services/postsService');

router.get('/', function(req,res,next) {

    res.render('admin/posts/index');
});

module.exports = router;