const express = require ('express');
const webController = require ('../controllers/webController');
const router = express.Router();

router.get ('/', webController.index);

module.exports = router;