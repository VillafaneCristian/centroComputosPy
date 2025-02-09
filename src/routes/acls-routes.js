const express = require ('express');
const router = express.Router();
const aclsController = require ('../controllers/acls-controller'); 
const aclsValidations = require ('../validations/acls-validations'); 
const aclsMiddleware = require ('../middlewares/acls-middleware');

router.get('/alta', aclsController.alta); 
router.get('/listado', aclsController.listado);

router.post('/guardar', aclsValidations, aclsMiddleware, aclsController.guardar);



module.exports = router; 