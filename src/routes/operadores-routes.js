const express = require ('express');
const router = express.Router();
const operadoresController = require ('../controllers/operadores-controller'); 
const operadoresValidations = require ('../validations/operadores-validations');
const operadoresMiddleware = require ('../middlewares/operadores-middleware');
const operadorSinLoguearMiddleware = require ('../middlewares/operadorSinLoguear-middleware');


router.get('/alta', operadorSinLoguearMiddleware, operadoresController.alta); 
router.get('/listado', operadorSinLoguearMiddleware, operadoresController.listado);
router.get('/modificarAvatar', operadorSinLoguearMiddleware, operadoresController.modificarAvatar);
router.get('/obtenerPorArea/:areaId', operadorSinLoguearMiddleware, operadoresController.obtenerPorArea); 


router.post('/guardar', operadoresValidations, operadoresMiddleware, operadoresController.guardar);
router.post('/salir', operadoresController.salir);


module.exports = router;