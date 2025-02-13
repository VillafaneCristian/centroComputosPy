const express = require ('express');
const router = express.Router();
const areasController = require ('../controllers/areas-controller');
const areasValidations = require ('../validations/areas-validations');
const areasMiddleware = require ('../middlewares/areas-middleware');
const operadorSinLoguearMiddleware = require ('../middlewares/operadorSinLoguear-middleware'); 


router.get('/alta', operadorSinLoguearMiddleware, areasController.alta);
router.get('/listado', operadorSinLoguearMiddleware, areasController.listado); 
router.get('/ver/:codigoArea', operadorSinLoguearMiddleware, areasController.ver);

router.post('/guardar', areasValidations, areasMiddleware, areasController.guardar);



module.exports = router;