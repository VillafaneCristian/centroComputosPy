const express = require ('express');
const tiposEquipamientoController = require('../controllers/tiposEquipamiento-controller');
const router =express.Router();
const tiposEquipamientoValidations = require ('../validations/tiposEquipamiento-validations');
const tiposEquipamientoMiddleware = require ('../middlewares/tiposEquipamiento-middleware');

router.get('/alta', tiposEquipamientoController.alta);

router.post('/guardar', tiposEquipamientoValidations, tiposEquipamientoMiddleware, tiposEquipamientoController.guardar);


module.exports = router;