const express = require ('express');
const adminController = require ('../controllers/adminController');
const router = express.Router();
const multer = require('multer');
// como podemos indicar para subir el archivo nombre y donde guarddarlo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images'))
    },
    filename: function (req, file, cb) {
      cb(null, 'products' + Date.now() + path.extname(file.originalname))
    }
  })
   
  const upload = multer({ storage })

router.get('/admin', adminController.admin);
router.get('/create', adminController.create);   
router.post('/create', upload.single('images'), adminController.save);   


module.exports = router;