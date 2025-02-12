const equipamientoService = require ('../services/equipamiento-service');

module.exports = {

    alta: function (req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        res.render('equipamiento/equipamientoAlta',{
            errors: errors ? errors : '',
            oldData: oldData ? oldData : ''
        });
    },

    guardar: function (req,res){
        equipamientoService.guardarEquipamiento(req.body)
            .then((unEquipamiento) => {
                console.log(`Se dió de alta el equipamiento con el numero de serie: ${unEquipamiento.nroSerieId}`);
                res.redirect('/incidentes/listado');
            })
            .catch((e)=>{
                console.log(e);
            });
    }
}