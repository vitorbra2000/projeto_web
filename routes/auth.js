var express = require('express');
var router = express.Router();

router.get('/login', function (req, res, next){

    res.render('login', {nsg: ''});
});

router.post('/login', function (req, res, next){

    var email = req.body.email;
    var password = req.body.password;

    console.log("Email:" + email);
    console.log("senha:" + password);

    req.redirect('/admin/posts');
});


module.exports = router;