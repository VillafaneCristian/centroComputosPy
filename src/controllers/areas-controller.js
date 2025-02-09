const areasService = require ('../services/areas-service');
const edificiosService = require ('../services/edificios-service');

module.exports = {

    alta: function (req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        edificiosService.obtenerEdificiosAlmacenados()
            .then((listadoEdificios) => {
                console.log(oldData);
                res.render('areas/areasAlta',
                    {errors: errors ? errors : '',
                     oldData: oldData ? oldData : '',
                     listadoEdificios: listadoEdificios ? listadoEdificios : ''   
                    });
            })
            .catch((e) => {
                console.log(e);
            });
    },

    guardar: function (req,res){
        areasService.guardarArea(req.body);
        res.redirect('/areas/listado');
    }, 
    
    listado: function(req,res){
        areasService.obtenerAreasAlmacenadas()
            .then((listadoAreas) => {
                res.render('areas/areasListado', {listadoAreas: listadoAreas});
            })
            .catch((e)=>{
                console.log(e);
            });
    }

};