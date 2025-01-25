const express = require ('express');
const router = express.Router();

const mainController = require ('../controllers/main-controller'); 
router.get('/', mainController.index);



/**** requerimos los archivos donde estan las rutas de cada seccion *********/
const usuariosRoutes = require('./usuarios-routes'); 
const dependenciasRoutes = require ('./dependencias-routes');
const operadoresRoutes = require ('./operadores-routes');
const aclsRoutes = require ('./acls-routes'); 
const areasRoutes = require ('./areas-routes'); 
const tiposEquipamientoRoutes = require ('./tiposEquipamiento-routes'); 


/*************rutas principales de cada seccion de la aplicacion ********/
router.use('/usuarios', usuariosRoutes); 
router.use('/dependencias', dependenciasRoutes);
router.use('/operadores', operadoresRoutes); 
router.use('/acls', aclsRoutes);
router.use('/areas',areasRoutes);
router.use('/tiposEquipamiento', tiposEquipamientoRoutes);





module.exports = router; 