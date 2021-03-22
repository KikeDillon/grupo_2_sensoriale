const path = require('path');
const fs = require ('fs');
const { body } = require ('express-validator');

const userValidatorController = {
    store: [
        body('firstname')
            .notEmpty().withMessage('debe completar su nombre')
            .isAlpha().withMessage('debe ingresar caracteres válidos'),
        body('lastname')
            .notEmpty().withMessage('debe completar su apellido')
            .isAlpha().withMessage('debe ingresar caracteres válidos'),
        body('username')
            .notEmpty().withMessage('debe completar su correo electrónico')
            .isEmail().withMessage('debe ingresar una dirección de correo eletrónica válida'),
        body('password')
            .notEmpty().withMessage('ingrese una contraseña')
            .isLength ({min: 6}).withMessage('la contraseña debe tener un mínimo de 6 caracteres')
            .equals ('confirmpassword').withMessage('las contraseña y su confirmación no coinciden'),
        body('confirmpassword')
            .notEmpty().withMessage('reingrese la contraseña')
            .isLength ({min: 6}).withMessage('la contraseña debe tener un mínimo de 6 caracteres')
            .equals('password').withMessage('la contraseña y su confirmación no coinciden')
    ],
    login: [
        body('username')
            .notEmpty().withMessage('debe completar su correo electrónico')
            .isEmail().withMessage('debe ingresar una dirección de correo eletrónica válida'),
        body('password')
            .notEmpty().withMessage('ingrese una contraseña')
            .isLength ({min: 6}).withMessage('la contraseña debe tener un mínimo de 6 caracteres')  
    ]
}

module.exports = userValidatorController;