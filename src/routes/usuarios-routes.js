const express = require ('express');
const usuariosController = require('../controllers/usuarios-controller');
const router = express.Router();

const usuariosValidations = require ('../validations/usuarios-validations');
const usuariosMiddleware = require ('../middlewares/usuarios-middleware');

router.get('/alta', usuariosController.alta);    
router.get('/listado', usuariosController.listado);

router.post('/guardar', usuariosValidations, usuariosMiddleware,  usuariosController.guardar);


module.exports = router; 