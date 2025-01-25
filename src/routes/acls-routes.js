const express = require ('express');
const router = express.Router();
const aclsController = require ('../controllers/acls-controller'); 

router.use('/alta', aclsController.alta); 



module.exports = router; 