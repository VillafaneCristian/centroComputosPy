const express = require ('express');
const router = express.Router();
const marcasModelosController = require ('../controllers/marcasModelos-controller');


router.get('/obtenerPorTipoEquipo/:tipoEquipoId', marcasModelosController.obtenerPorTipoEquipo);
    

module.exports = router;