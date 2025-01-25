const express = require ('express');
const router = express.Router();
const operadoresController = require ('../controllers/operadores-controller'); 


router.get('/alta', operadoresController.alta); 



module.exports = router;