const path = require('path');

const csslogin = ['footer', 'header', 'tablet', 'notebook', 'login'];
const cssforgotpassword = ['footer', 'header', 'tablet', 'notebook', 'forgot-password'];
const cssregister = ['footer', 'header', 'tablet', 'notebook', 'register'];

const userController = {
    login: function (req,res){
        return res.render (path.resolve(__dirname, '../views/user/login.ejs'), {styles: csslogin});
    },    
    forgotpassword: function (req,res){
        return res.render (path.resolve(__dirname, '../views/user/forgot-password.ejs'), {styles: cssforgotpassword});
    },    
    register: function (req,res){
        return res.render (path.resolve(__dirname, '../views/user/register.ejs'), {styles: cssregister});
    }
}

module.exports = userController;