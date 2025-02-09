const tipoEquipamientoService = require ('../services/tiposEquipamiento-service');

module.exports = {

    alta: function(req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        res.render('tiposEquipamiento/tiposEquipamientoAlta',
            {
                errors: errors ? errors : '',
                oldData: oldData ? oldData : ''
            }
        );
    },

    guardar: function(req,res){
        tipoEquipamientoService.guardarTipoEquipamiento(req.body)
        res.send('se dio de alta un tipo de equipamiento nuevo');
    },

    listado: function(req,res){
        tipoEquipamientoService.obtenerTiposEquipamientoAlmacenados()
            .then((listadoTiposEquipamiento) => {
                res.render('tiposEquipamiento/tiposEquipamientoListado',{listadoTiposEquipamiento:listadoTiposEquipamiento});
            })
            .catch((e)=>{
                console.log(e)
            });
    }

};