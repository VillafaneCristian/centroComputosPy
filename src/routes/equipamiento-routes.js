const express = require ('express');
const router = express.Router();

const equipamientoController = require('../controllers/equipamiento-controller');
const equipamientoValidations = require ('../validations/equipamiento-validations');
const equipamientoMiddleware = require ('../middlewares/equipamiento-middleware');
const operadorSinLoguearMiddleware = require ('../middlewares/operadorSinLoguear-middleware');

router.get('/alta', operadorSinLoguearMiddleware, equipamientoController.alta);

router.post('/guardar', equipamientoValidations, equipamientoMiddleware, equipamientoController.guardar);



module.exports = router;