const express = require ('express');
const saleController = require ('../controllers/saleController');
const router = express.Router();

router.get ('/checkout', saleController.checkout);
router.get ('/maridaje', saleController.maridaje);
router.get ('/message-card', saleController.messagecard);
router.get ('/packaging', saleController.packaging);
router.get ('/payment', saleController.payment);
router.get ('/shipping', saleController.shipping);

module.exports = router;