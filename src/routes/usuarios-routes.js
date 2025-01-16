const express = require ('express');
const router = express.Router();

router.get('/alta', function(req,res){
    res.send('ALTA DE USUARIOS');     
})


module.exports = router; 