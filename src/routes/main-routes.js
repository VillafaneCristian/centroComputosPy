const express = require ('express');
const router = express.Router();

const usuariosRoutes = require('./usuarios-routes'); 

router.get('/', function(req,res){
    res.send('PAGINA PRINCIPAL DE LA APLICACION'); 
})


/******* RUTAS DELACIONADAS CON USUARIOS *******/
router.use('/usuarios', usuariosRoutes); 


module.exports = router; 