const express = require ('express');
const userController = require ('../controllers/userController');
const router = express.Router();

const userValidatorController = require ('../middlewares/userValidatorController');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

router.get ('/recuperarcontrasena', guestMiddleware, userController.forgotpassword);
router.get ('/ingresar', guestMiddleware, userController.login);
router.post('/ingresar', userValidatorController.login, userController.processLogin);
router.get ('/registrarse', guestMiddleware, userController.register);
router.post ('/registrarse', userValidatorController.store, userController.store);
router.get ('/perfil', authMiddleware, userController.userProfile);
//router.get ('/cerrarsesion', userController.logout);

module.exports = router;