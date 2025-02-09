const express = require ('express');
const router = express.Router();
const operadoresController = require ('../controllers/operadores-controller'); 
const operadoresValidations = require ('../validations/operadores-validations');
const operadoresMiddleware = require ('../middlewares/operadores-middleware');


router.get('/alta', operadoresController.alta); 
router.get('/listado', operadoresController.listado);
router.get('/modificarAvatar', operadoresController.modificarAvatar); 


router.post('/guardar', operadoresValidations, operadoresMiddleware, operadoresController.guardar);


module.exports = router;