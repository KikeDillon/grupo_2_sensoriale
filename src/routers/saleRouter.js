const express = require ('express');
const saleController = require ('../controllers/saleController');
const router = express.Router();

router.get ('/carrito', saleController.checkout);
router.get ('/maridaje', saleController.maridaje);
router.get ('/mensaje', saleController.messagecard);
router.get ('/packaging', saleController.packaging);
router.get ('/pago', saleController.payment);
router.get ('/envio', saleController.shipping);

module.exports = router;