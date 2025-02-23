const express = require ('express');
const router = express.Router();
const incidentesController = require ('../controllers/incidentes-controller');
const incidentesValidations = require ('../validations/incidentes-validations');
const incidentesMiddleware = require ('../middlewares/incidentes-middleware');
const operadorSinLoguearMiddleware = require ('../middlewares/operadorSinLoguear-middleware');
const incidentesEdicionValidations = require ('../validations/incidentesEdicion-validations');
const incidentesEdicionMiddleware = require ('../middlewares/incidentesEdicion-middleware');

router.get('/alta', operadorSinLoguearMiddleware, incidentesController.alta);
router.get('/listado', operadorSinLoguearMiddleware, incidentesController.listado);
router.get('/editar/:numeroIncidente', operadorSinLoguearMiddleware, incidentesController.editar);

router.post('/guardar', incidentesValidations, incidentesMiddleware, incidentesController.guardar);

router.post('/procesarEditar', operadorSinLoguearMiddleware, incidentesEdicionValidations, incidentesEdicionMiddleware, incidentesController.procesarEditar);

module.exports = router; 