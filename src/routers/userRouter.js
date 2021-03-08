const express = require ('express');
const userController = require ('../controllers/userController');
const router = express.Router();

router.get ('/recuperarcontrasena', userController.forgotpassword);
router.get ('/ingresar', userController.login);
router.get ('/registrarse', userController.register);

module.exports = router;