const express = require ('express');
const userController = require ('../controllers/userController');
const router = express.Router();

const userValidatorController = require ('../middlewares/userValidatorController');


router.get ('/recuperarcontrasena', userController.forgotpassword);
router.get ('/ingresar', userController.login);
router.get ('/registrarse', userController.register);
router.post ('/registrarse', userValidatorController.store, userController.store);

module.exports = router;