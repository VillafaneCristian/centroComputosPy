const express = require ('express');
const edificiosController = require('../controllers/edificios-controller');
const router = express.Router();
const edificiosValidations = require ('../validations/edificios-validations');
const edificiosMiddleware = require ('../middlewares/edificios-middleware');

router.get('/alta', edificiosController.alta);

router.post('/guardar', edificiosValidations, edificiosMiddleware, edificiosController.guardar);




module.exports = router;