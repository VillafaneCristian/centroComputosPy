const express = require ('express');
const equipamientoController = require('../controllers/equipamiento-controller');
const router = express.Router();

router.get('/alta', equipamientoController.alta);



module.exports = router;