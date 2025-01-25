const express = require ('express');
const dependenciasController = require('../controllers/dependencias-controller');
const router = express.Router();

router.get('/alta',dependenciasController.alta); 




module.exports = router;