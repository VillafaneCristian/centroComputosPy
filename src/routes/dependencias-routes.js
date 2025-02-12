const express = require ('express');
const dependenciasController = require('../controllers/dependencias-controller');
const router = express.Router();
const dependenciasValidations = require ('../validations/dependencias-validations');
const dependenciasMiddleware = require ('../middlewares/dependencias-middleware');
const operadorSinLoguearMiddleware = require ('../middlewares/operadorSinLoguear-middleware');

router.get('/alta', operadorSinLoguearMiddleware, dependenciasController.alta); 
router.get('/listado',dependenciasController.listado);

router.post('/guardar', dependenciasValidations, dependenciasMiddleware, dependenciasController.guardar);




module.exports = router;