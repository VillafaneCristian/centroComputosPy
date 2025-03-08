const express = require ('express');
const usuariosController = require('../controllers/usuarios-controller');
const router = express.Router();

const usuariosValidations = require ('../validations/usuarios-validations');
const usuariosMiddleware = require ('../middlewares/usuarios-middleware');
const operadorSinLoguearMiddleware = require ('../middlewares/operadorSinLoguear-middleware');

router.get('/alta', operadorSinLoguearMiddleware,  usuariosController.alta);    
router.get('/listado', operadorSinLoguearMiddleware, usuariosController.listado);
router.get('/ver/:cuil',operadorSinLoguearMiddleware, usuariosController.ver);
router.get('/obtenerPorDependencia/:codigoDependencia', operadorSinLoguearMiddleware, usuariosController.obtenerPorDependencia )


router.post('/guardar', usuariosValidations, usuariosMiddleware,  usuariosController.guardar);


module.exports = router; 