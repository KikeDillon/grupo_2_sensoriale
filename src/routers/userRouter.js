const express = require ('express');
const userController = require ('../controllers/userController');
const router = express.Router();

router.get ('/forgot-password', userController.forgotpassword);
router.get ('/login', userController.login);
router.get ('/register', userController.register);

module.exports = router;