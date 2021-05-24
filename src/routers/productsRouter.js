const express = require ('express');
const productsController = require ('../controllers/productsController');
const router = express.Router();

router.get ('/detalle/:id', productsController.detail);
router.get ('/seleccion', productsController.selection);

module.exports = router;