const express = require ('express');
const dependenciasController = require('../controllers/dependencias-controller');
const router = express.Router();
const dependenciasValidations = require ('../validations/dependencias-validations');
const dependenciasMiddleware = require ('../middlewares/dependencias-middleware');

router.get('/alta',dependenciasController.alta); 
router.get('/listado',dependenciasController.listado);

router.post('/guardar', dependenciasValidations, dependenciasMiddleware, dependenciasController.guardar);




module.exports = router;