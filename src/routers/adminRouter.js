const express = require ('express');
const adminController = require ('../controllers/adminController');
const router = express.Router();
const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/imgPerfume'));
    },
    filename: function (req, file, cb) {
      cb(null, 'perfume-'+Date.now()+path.extname(file.originalname));
    }
})
   
const upload = multer({ storage })

router.get ('/administrar', adminController.admin);
router.get ('/administrar/crear', adminController.create);
router.post ('/administrar/crear', upload.single('image'), adminController.save);
router.get ('/administrar/visualizar/:id', adminController.view);
router.get ('/administrar/editar/:id', adminController.edit);
router.put ('/administrar/actualizar/:id', upload.single('newImage'), adminController.update);
router.get ('/administrar/eliminar/:id', adminController.delete);
router.get ('/administrar/eliminado/:id', adminController.destroy);

module.exports = router;