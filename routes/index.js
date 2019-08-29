var express = require('express');
var router = express.Router();
var postsServide = require('../services/postsService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var post = postService.getPosts();
   
  }
  res.render('index',{title: "blog",posts: posts});
});

module.exports = router;
