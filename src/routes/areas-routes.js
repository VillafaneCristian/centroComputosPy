const express = require ('express');
const router = express.Router();
const areasController = require ('../controllers/areas-controller');


router.get('/alta', areasController.alta);



module.exports = router;