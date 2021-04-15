const path = require('path');
const fs = require ('fs');
const { body } = require ('express-validator');
const db = require ('../database/models/index.js');

const userValidatorController = {
    store: [
        body('firstname')
            .notEmpty().withMessage('debe completar su nombre')
            .isAlpha().withMessage('debe ingresar caracteres válidos'),
        body('lastname')
            .notEmpty().withMessage('debe completar su apellido')
            .isAlpha().withMessage('debe ingresar caracteres válidos'),
        body('email')
            .notEmpty().withMessage('debe completar su correo electrónico')
            .isEmail().withMessage('debe ingresar una dirección de correo eletrónica válida')
            .custom((value) => {
                return db.User.findAll({
                    where: {
                      email: value
                    }
                  })
                .then (function(users){                             // tomo la base de ususarios a un array
                    console.log (users);
                    if (users.length > 0) {
                        return Promise.reject('el email ya se encuentra registrado');
                    }else{
                // Indicates the success of this synchronous custom validator
                return true;
                    }
                })
            }),
        body('password')
            .notEmpty().withMessage('ingrese una contraseña')
            .isLength ({min: 6}).withMessage('la contraseña debe tener un mínimo de 6 caracteres'),
        body('confirmpassword')
            .notEmpty().withMessage('reingrese la contraseña')
            .isLength ({min: 6}).withMessage('la contraseña debe tener un mínimo de 6 caracteres')
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                  throw new Error('Password confirmation does not match password');
                }
            
                // Indicates the success of this synchronous custom validator
                return true;
              }),


          //  .equals('password').withMessage('la contraseña y su confirmación no coinciden'),
    ],
    login: [
        body('useremail')
            .notEmpty().withMessage('debe completar su correo electrónico')
            .isEmail().withMessage('debe ingresar una dirección de correo eletrónica válida'),
        body('password')
            .notEmpty().withMessage('ingrese una contraseña')
            .isLength ({min: 6}).withMessage('la contraseña debe tener un mínimo de 6 caracteres')  
    ]
}

module.exports = userValidatorController;