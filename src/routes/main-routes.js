const express = require ('express');
const router = express.Router();

const mainController = require ('../controllers/main-controller'); 
router.get('/', mainController.index);



/**** requerimos los archivos donde estan las rutas de cada seccion *********/
const usuariosRoutes = require('./usuarios-routes'); 
const dependenciasRoutes = require ('./dependencias-routes');


/*************rutas principales de cada seccion de la aplicacion ********/
router.use('/usuarios', usuariosRoutes); 
router.use('/dependencias', dependenciasRoutes);





module.exports = router; 