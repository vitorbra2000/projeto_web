var express = require('express');
var router = express.Router();
var postsService = require('../../services/postsService');

router.get('/', function(req,res,next) {
    var posts = postsService.getPosts();

    var data = {
        posts: posts
    };

    res.render('admin/posts/index', data );
});

router.get('/create', function(req, res, next){

    res.render('admin/posts/create');
});

router.post('/create', function(req, res, next){
    //...

    res.redirect('/admin/posts');
});

module.exports = router;