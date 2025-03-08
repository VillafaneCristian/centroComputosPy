const express = require ('express');
const router = express.Router();
const areasController = require ('../controllers/areas-controller');
const areasValidations = require ('../validations/areas-validations');
const areasAltaMiddleware = require ('../middlewares/areas-alta-middleware');
const areasModificacionMiddleware = require ('../middlewares/areas-modificacion-middleware');
const operadorSinLoguearMiddleware = require ('../middlewares/operadorSinLoguear-middleware'); 


router.get('/alta', operadorSinLoguearMiddleware, areasController.alta);
router.get('/listado', operadorSinLoguearMiddleware, areasController.listado); 
router.get('/ver/:codigoArea', operadorSinLoguearMiddleware, areasController.ver);

router.post('/guardar', areasValidations, areasAltaMiddleware, areasController.guardar);

router.get('/editar/:codigoArea', operadorSinLoguearMiddleware, areasController.editar)
router.put('/editar', operadorSinLoguearMiddleware, areasValidations, areasModificacionMiddleware, areasController.procesarEditar); 

router.delete('/eliminar/:codigoArea',operadorSinLoguearMiddleware, areasController.eliminar);

module.exports = router;