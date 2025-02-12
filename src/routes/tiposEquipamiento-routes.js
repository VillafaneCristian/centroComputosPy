const express = require ('express');
const tiposEquipamientoController = require('../controllers/tiposEquipamiento-controller');
const router =express.Router();
const tiposEquipamientoValidations = require ('../validations/tiposEquipamiento-validations');
const tiposEquipamientoMiddleware = require ('../middlewares/tiposEquipamiento-middleware');
const operadorSinLoguearMiddleware = require('../middlewares/operadorSinLoguear-middleware');

router.get('/alta', operadorSinLoguearMiddleware, tiposEquipamientoController.alta);
router.get('/listado', operadorSinLoguearMiddleware, tiposEquipamientoController.listado);

router.post('/guardar', tiposEquipamientoValidations, tiposEquipamientoMiddleware, tiposEquipamientoController.guardar);


module.exports = router;