const edificiosService = require ('../services/edificios-service');

module.exports = {

    alta: function(req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        res.render('edificios/edificiosAlta',{
            errors: errors ? errors : '',
            oldData: oldData ? oldData : ''
        });
    },

    guardar: function(req,res){
        edificiosService.guardarEdificio(req.body);
        res.redirect('/edificios/listado');
    }, 

    listado: function (req,res){
        edificiosService.obtenerEdificiosAlmacenados()
            .then((listadoEdificios)=>{
                res.render('edificios/edificioslistado', {listadoEdificios: listadoEdificios});
            })
            .catch((e) => {
                console.log(e);
            });
    }

}