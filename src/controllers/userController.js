const { readFileSync } = require('fs');
const path = require('path');
const fs = require ('fs');
const { validationResult } = require ('express-validator');


const csslogin = ['footer', 'header', 'tablet', 'login'];
const cssforgotpassword = ['footer', 'header', 'tablet', 'forgot-password'];
const cssregister = ['footer', 'header', 'tablet', 'register'];

const userController = {
    login: function (req,res){
        return res.render (path.resolve(__dirname, '../views/user/login.ejs'), {styles: csslogin});
    },    
    forgotpassword: function (req,res){
        return res.render (path.resolve(__dirname, '../views/user/forgot-password.ejs'), {styles: cssforgotpassword});
    },    
    register: function (req,res){
        return res.render (path.resolve(__dirname, '../views/user/register.ejs'), {styles: cssregister});
    },
    store: function (req, res){
        let errorsValidation = validationResult(req);
        if (errorsValidation.isEmpty()){
            let users = JSON.parse (fs.readFileSync(path.resolve(__dirname, '../database/users.json')));
            let lastuser = users.pop ();
            users.push (lastuser);
            let newuser = {
                id : lastuser.id + 1,
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                username : req.body.username,
                password : req.body.password
            }
            console.log (newuser);
            users.push (newuser);
            let newUserSTR = JSON.stringify(users,null,2);
            fs.writeFileSync(path.resolve(__dirname,'../database/users.json'), newUserSTR);
            res.redirect ('/');
        } else {
            let olduser = {
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                username : req.body.username,
                password : req.body.password
            }
            console.log (olduser);
            res.render (path.resolve(__dirname, '../views/user/register.ejs'), {styles: cssregister, errors: errorsValidation.mapped(), olduser: olduser })
        }
    }
}

module.exports = userController;