const express = require ('express');
const router = express.Router();
const apiModelsController = require ('../../controllers/api/apiModelsController')


router.get ('/api/models', apiModelsController.index)

module.exports = router;

