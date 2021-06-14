const express = require('express');
const router = express.Router();
const apiProductController = require ('../../controllers/api/apiProductController')


//Rutas
//Listado de todos los actores
router.get('/api/products', apiProductController.index);
//Detalle del actor
router.get('/api/products/:id', apiProductController.detail);
//En que peliculas trabajo el actor con id tal
//router.get('/:id/movies', apiProductController.actorMovies);

//Agregar un actor
router.post('/api/products/create', apiProductController.create);
//Modificar un actor
router.put('/api/products/update/:id', apiProductController.update);
//Eliminar un actor
router.delete('/api/products/delete/:id', apiProductController.destroy);

module.exports = router;