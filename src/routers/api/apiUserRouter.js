const express = require('express');
const router = express.Router();
const apiuserController = require ('../../controllers/api/apiuserController')


//Rutas
//Listado de todos los actores
router.get('/api/user', apiuserController.index);
//Detalle del actor
router.get('/api/user/:id', apiuserController.detail);
//En que peliculas trabajo el actor con id tal
//router.get('/:id/movies', apiuserController.actorMovies);

//Agregar un actor
router.post('/api/user/create', apiuserController.create);
//Modificar un actor
router.put('/api/user/update/:id', apiuserController.update);
//Eliminar un actor
router.delete('/api/user/delete/:id', apiuserController.destroy);

module.exports = router;