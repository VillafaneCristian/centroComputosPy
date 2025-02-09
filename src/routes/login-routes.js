const express = require ('express');
const router = express.Router();
const loginController = require ('../controllers/login-controller');
const loginValidations = require ('../validations/login-validations');
const loginMiddleware = require ('../middlewares/login-middleware');
const loginValidacionOperador = require ('../middlewares/login-validarOperador-middleware');

router.get('/', loginController.mostrarLogin);

router.post('/ingresar',loginValidations, loginMiddleware, loginValidacionOperador, loginController.procesarLogin);

module.exports = router;