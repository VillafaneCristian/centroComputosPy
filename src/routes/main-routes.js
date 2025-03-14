const express = require ('express');
const router = express.Router();
const operadorSinLoguearMiddleware = require ('../middlewares/operadorSinLoguear-middleware');

const mainController = require ('../controllers/main-controller'); 
router.get('/', operadorSinLoguearMiddleware, mainController.index);



/**** requerimos los archivos donde estan las rutas de cada seccion *********/
const usuariosRoutes = require('./usuarios-routes'); 
const dependenciasRoutes = require ('./dependencias-routes');
const operadoresRoutes = require ('./operadores-routes');
const aclsRoutes = require ('./acls-routes'); 
const areasRoutes = require ('./areas-routes'); 
const tiposEquipamientoRoutes = require ('./tiposEquipamiento-routes'); 
const edificiosRoutes = require ('./edificios-routes');
const equipamientoRoutes = require ('./equipamiento-routes');
const incidentesRoutes = require ('./incidentes-routes');
const loginRoutes = require ('./login-routes');
const marcasModelosRoutes = require ('./marcasModelos-routes');


/*************rutas principales de cada seccion de la aplicacion ********/
router.use('/usuarios', usuariosRoutes); 
router.use('/dependencias', dependenciasRoutes);
router.use('/operadores', operadoresRoutes); 
router.use('/acls', aclsRoutes);
router.use('/areas',areasRoutes);
router.use('/tiposEquipamiento', tiposEquipamientoRoutes);
router.use('/edificios', edificiosRoutes);
router.use('/equipamiento', equipamientoRoutes);
router.use('/incidentes', incidentesRoutes);
router.use('/login',loginRoutes);
router.use('/marcasModelos', marcasModelosRoutes);


module.exports = router; 