const path = require('path');

const userController = {
    login: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/login.ejs'));
    },    
    forgotpassword: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/forgot-password.ejs'));
    },    
    register: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/register.ejs'));
    }
}

module.exports = userController;