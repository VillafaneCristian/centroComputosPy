const express = require ('express');
const usuariosController = require('../controllers/usuarios-controller');
const router = express.Router();

router.get('/alta', usuariosController.alta);     


module.exports = router; 