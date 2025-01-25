const express = require ('express');
const tiposEquipamientoController = require('../controllers/tiposEquipamiento-controller');
const router =express.Router();

router.get('/alta', tiposEquipamientoController.alta);


module.exports = router;