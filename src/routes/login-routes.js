const express = require ('express');
const router = express.Router();
const loginController = require ('../controllers/login-controller');
const loginValidations = require ('../validations/login-validations');
const loginMiddleware = require ('../middlewares/login-middleware');
const loginValidacionOperadorMiddleware = require ('../middlewares/login-validarOperador-middleware');
const operadorLogueadoMiddleware = require ('../middlewares/operadorLogueado-middleware');

router.get('/', operadorLogueadoMiddleware, loginController.mostrarLogin);

router.post('/ingresar',loginValidations, loginMiddleware, loginValidacionOperadorMiddleware, loginController.procesarLogin);

module.exports = router;