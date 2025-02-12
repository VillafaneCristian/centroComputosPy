const incidentesService = require ('../services/incidentes-service');

module.exports = {
    alta: function(req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        res.render('incidentes/incidentesAlta',{
            errors: errors ? errors : '',
            oldData: oldData ? oldData : ''
        });
    },

    guardar: function(req,res){
        incidentesService.guardarIncidente(req.body,req.session.operadorLogueado)
            .then((incidenteGuardado) => {
                console.log (`Se creo el incidente numero: ${incidenteGuardado.nroIncidenteId}`); 
                res.redirect('/');
            })
            .catch((e) => {
                console.log(e)
            })
    }, 
    listado: function(req,res){
        res.render('incidentes/incidentesListado');
        incidentesService.obtenerIncidentesAlmacenados()
            .then((listadoIncidentes) => {
                res.render('incidentes/incidentesListado');
            })
            .catch((e)=>{
                console.log(e);
            });
    }
}