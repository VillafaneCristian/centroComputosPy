const express = require ('express');
const router = express.Router();
const incidentesController = require ('../controllers/incidentes-controller');
const incidentesValidations = require ('../validations/incidentes-validations');
const incidentesMiddleware = require ('../middlewares/incidentes-middleware');
const operadorSinLoguearMiddleware = require ('../middlewares/operadorSinLoguear-middleware');

router.get('/alta', operadorSinLoguearMiddleware, incidentesController.alta);
router.get('/listado', operadorSinLoguearMiddleware, incidentesController.listado);

router.get('/editar/:numeroIncidente', operadorSinLoguearMiddleware, incidentesController.editar);

router.post('/guardar', incidentesValidations, incidentesMiddleware, incidentesController.guardar);

module.exports = router; 