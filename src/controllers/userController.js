const { readFileSync } = require('fs');
const path = require('path');
const fs = require ('fs');
const bcrypt = require ('bcryptjs');
const { validationResult } = require ('express-validator');

const db = require ('../database/models/index.js');

const csslogin = ['footer', 'header', 'tablet', 'login'];
const cssforgotpassword = ['footer', 'header', 'tablet', 'forgot-password'];
const cssregister = ['footer', 'header', 'tablet', 'register'];
const cssUserProfile = ['footer', 'header', 'tablet', 'userProfile'];

const userController = {
    login: function (req, res){
        return res.render (path.resolve(__dirname, '../views/user/login.ejs'), {styles: csslogin});
    },
    processLogin: function (req, res){
        let errorsValidation = validationResult(req);              // guardamos en errorsValidation el contenido de validationResult(req). esto es fijo del bloque de módulo requerido de validation express
        if (errorsValidation.isEmpty()){
            db.User.findAll()
                .then (function(users){                             // tomo la base de ususarios a un array
                    console.log("users: " + users);
                    let user = users.find (function(i){             // usamos el find para encontrar el usuario ingresado por req.body.useremail
                        return req.body.useremail == i.email;           // devuelvo el resultado a user si encuentro el usuario ingresado. se busca en el array users
                    });
                    if (user){                                      // si user tiene contenido es porque se encontró un usuario con el find
                        if(bcrypt.compareSync(req.body.password, user.password)){            // la contraseña ingresada en el body es igual a la contraseña del mismo usuario en el array ?
                            // SESSION
                            console.log('registro usuario logueado: ' + user);
                            //return res.send(user);
                            req.session.usuarioLogueado = user;            // el usuario logueado será el email que se guardo en user
                            if(req.body.remember){
                                res.cookie('rememberCookie',user.email,{ maxAge: 600000 });
                            }
                            res.redirect ('/');    
                        }else{
                            let userEmailOld = req.body.useremail;         // si la contraseña no es correcta, guardo el usuario ingresado en el body en una variable para no perder ese dato y ponerlo en el value de la vista login.ejs
                            return res.render (path.resolve(__dirname, '../views/user/login.ejs'), {styles: csslogin, errorpassword: {msg:'contraseña inválida'}, userEmailOld: userEmailOld })  // regreso la vista y envío, el css, el mensaje de error, el usuario ingresado
                        }
                    }else{
                        let userEmailOld = req.body.useremail;             // si no se encontró el usuario,  guardo el usuario ingresado en el body en una variable para no perder ese dato y ponerlo en el value de la vista login.ejs
                        return res.render (path.resolve(__dirname, '../views/user/login.ejs'), {styles: csslogin, erroremail: {msg:'usuario inexistente'}, userEmailOld: userEmailOld })    // regreso la vista y envío, el css, el mensaje de error, el usuario ingresado
                    }
                });    
        }else{
            let userEmailOld = req.body.useremail;                 // si hay errores en la validación, guardo el usuario ingresado en el body en una variable para no perder ese dato y ponerlo en el value de la vista login.ejs
            res.render (path.resolve(__dirname, '../views/user/login.ejs'), {styles: csslogin, errors: errorsValidation.mapped(), userEmailOld: userEmailOld })   // errorsValidation.mapped() sirve para ordenar los mensajes del array de mensajes y luego poder usarlos en la vista, tipo errors.email.msg
        }

    },    
    forgotpassword: function (req, res){
        return res.render (path.resolve(__dirname, '../views/user/forgot-password.ejs'), {styles: cssforgotpassword});
    },    
    register: function (req, res){
        return res.render (path.resolve(__dirname, '../views/user/register.ejs'), {styles: cssregister});
    },
    store: function (req, res){
        let errorsValidation = validationResult(req);
        if (errorsValidation.isEmpty()){
            db.User.findAll()
                .then (function(users){                             // tomo la base de ususarios a un array
                    let user = users.find (function(i){             // usamos el find para encontrar el usuario ingresado por req.body.useremail
                        return req.body.email == i.email;           // devuelvo el resultado a user si encuentro el usuario ingresado. se busca en el array users
                    });
                    if (!user){                                     // si el usuario del req no existe en la base, se puede crear
                        db.User.create({
                            first_name : req.body.firstname,
                            last_name : req.body.lastname,
                            email : req.body.email,
                            password : (bcrypt.hashSync(req.body.password, 10)),
                            usertype : 0
                        })
                        .then (function(){
                            return res.redirect ('/');
                        });
                    }else{                                          // si el usuario del req existe en la base, tiro el error y mando las variables con lo completado al formulario del ejs
                        let olduser = {
                            firstname : req.body.firstname,
                            lastname : req.body.lastname,
                            email : req.body.email
                        }
                        return res.render (path.resolve(__dirname, '../views/user/register.ejs'), {styles: cssregister, errorUserExist: {msg:'el email ya se encuentra registrado'}, olduser: olduser })  // regreso la vista y envío, el css, el mensaje de error, el usuario ingresado
                    }
                });  
        }else{                                                      // si hay errores de validación, mando las variables al formulario de la vista.
            let olduser = {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email
            }
            res.render (path.resolve(__dirname, '../views/user/register.ejs'), {styles: cssregister, errors: errorsValidation.mapped(), olduser: olduser })
        }
    },
    userProfile: function(req,res){
        let loggedUser = {
            firstname : req.session.usuarioLogueado.first_name,
            lastname : req.session.usuarioLogueado.last_name,
            email : req.session.usuarioLogueado.email,
        }
        return res.render (path.resolve(__dirname, '../views/user/userProfile.ejs'), {styles: cssUserProfile, loggedUser: loggedUser })
    },
    logout: function(req, res){
        req.session.destroy();
        if (req.cookies.rememberCookie){
            res.cookie('rememberCookie',null,{maxAge: -1});
        }
        return res.redirect ('/');
    }
}

module.exports = userController;