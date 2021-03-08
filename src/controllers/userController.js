const path = require('path');

const csslogin = ['footer', 'header', 'tablet', 'login'];
const cssforgotpassword = ['footer', 'header', 'tablet', 'forgot-password'];
const cssregister = ['footer', 'header', 'tablet', 'register'];

const userController = {
    login: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/login.ejs'), {styles: csslogin});
    },    
    forgotpassword: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/forgot-password.ejs'), {styles: cssforgotpassword});
    },    
    register: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/register.ejs'), {styles: cssregister});
    }
}

module.exports = userController;