const express = require ('express');
const router = express.Router();
const incidentesController = require ('../controllers/incidentes-controller');
const incidentesValidations = require ('../validations/incidentes-validations');
const incidentesMiddleware = require ('../middlewares/incidentes-middleware');
const operadorSinLoguearMiddleware = require ('../middlewares/operadorSinLoguear-middleware');
const incidentesEdicionValidations = require ('../validations/incidentesEdicion-validations');
const incidentesEdicionMiddleware = require ('../middlewares/incidentesEdicion-middleware');
const incidentesPrestamoValidations = require ('../validations/incidentesPrestamo-validations');
const incidentesPrestamoMiddleware = require ('../middlewares/incidentesPrestamo-middleware');

router.get('/alta', operadorSinLoguearMiddleware, incidentesController.alta);
router.get('/listado', operadorSinLoguearMiddleware, incidentesController.listado);
router.get('/editar/:numeroIncidente', operadorSinLoguearMiddleware, incidentesController.editar);
router.get('/cerrar/:numeroIncidente',operadorSinLoguearMiddleware,incidentesController.cerrar);
router.get('/prestamoAlta',operadorSinLoguearMiddleware,incidentesController.prestamoAlta);

router.post('/guardar', incidentesValidations, incidentesMiddleware, incidentesController.guardar);
router.post('/prestamoAlta/guardar', incidentesPrestamoValidations, incidentesPrestamoMiddleware, incidentesController.guardarPrestamo);

router.put('/procesarEditar', operadorSinLoguearMiddleware, incidentesEdicionValidations, incidentesEdicionMiddleware, incidentesController.procesarEditar);
router.put('/procesarCierre/:numeroIncidente', operadorSinLoguearMiddleware,incidentesController.procesarCierre);


module.exports = router; 