const express = require ('express');
const router = express.Router();
const areasController = require ('../controllers/areas-controller');
const areasValidations = require ('../validations/areas-validations');
const areasMiddleware = require ('../middlewares/areas-middleware');


router.get('/alta', areasController.alta);
router.post('/guardar', areasValidations, areasMiddleware, areasController.guardar);



module.exports = router;