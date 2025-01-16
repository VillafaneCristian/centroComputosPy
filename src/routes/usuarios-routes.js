const express = require ('express');
const router = express.Router();

router.get('/', function(req,res){
    res.send('ALTA DE USUARIOS');     
})


module.exports = router; 