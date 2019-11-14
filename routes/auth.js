var express = require('express');
var router = express.Router();
var authService = require('../services/authService');

router.get('/login', function (req, res, next){

    res.render('login', {nsg: ''});
});

router.post('/login', function (req, res, next){

    var email = req.body.email;
    var password = req.body.password;

    if(authService.validateUserEmailAndPassword(email, password)){
        if(!req.session.authenticadUsers){
           req.session.authenticadUsers = []; 
        }

        var user = authService.getUserByEmail(Email);
    
        
        req.session.authenticadUsers.push(user);
        res.cookie('logintoken', user.loginToken , {maxAge:90000, httpOnly: true });

        req.redirect('/admin/posts');
    }
    console.log("Email:" + email);
    console.log("senha:" + password);

    req.render('login', { msg: 'Email e senha incorretos' });
});


module.exports = router;