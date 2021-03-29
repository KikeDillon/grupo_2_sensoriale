const express = require ('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const adminController = require ('../controllers/adminController');
const admMiddleware = require ('../middlewares/admMiddleware');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/imgPerfume'));
    },
    filename: function (req, file, cb) {
      cb(null, 'perfume-'+Date.now()+path.extname(file.originalname));
    }
})
   
const upload = multer({ storage })

router.get ('/administrar', admMiddleware, adminController.admin);
router.get ('/administrar/crear', admMiddleware, adminController.create);
router.post ('/administrar/crear', upload.single('image'), adminController.save);
router.get ('/administrar/visualizar/:id', admMiddleware, adminController.view);
router.get ('/administrar/editar/:id', admMiddleware, adminController.edit);
router.put ('/administrar/actualizar/:id', upload.single('newImage'), adminController.update);
router.get ('/administrar/eliminar/:id', admMiddleware, adminController.delete);
router.get ('/administrar/eliminado/:id', admMiddleware, adminController.destroy);

module.exports = router;