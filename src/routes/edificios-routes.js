const express = require ('express');
const edificiosController = require('../controllers/edificios-controller');
const router = express.Router();

router.get('/alta', edificiosController.alta);




module.exports = router;