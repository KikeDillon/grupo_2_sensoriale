const express = require ('express');
const productsController = require ('../controllers/productsController');
const productMiddleware = require ('../middlewares/productMiddleware');
const router = express.Router();

router.get ('/detalle/:id?', productsController.detail);
router.get ('/seleccion/:genre?', productMiddleware, productsController.selection);

module.exports = router;