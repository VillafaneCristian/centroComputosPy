const express = require ('express');
const edificiosController = require('../controllers/edificios-controller');
const router = express.Router();
const edificiosValidations = require ('../validations/edificios-validations');
const edificiosMiddleware = require ('../middlewares/edificios-middleware');
const operadorSinLoguearMiddleware = require ('../middlewares/operadorSinLoguear-middleware');

router.get('/alta', operadorSinLoguearMiddleware, edificiosController.alta);
router.get('/listado', edificiosController.listado);


router.post('/guardar', edificiosValidations, edificiosMiddleware, edificiosController.guardar);




module.exports = router;