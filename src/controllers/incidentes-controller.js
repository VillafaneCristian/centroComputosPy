const incidentesService = require ('../services/incidentes-service');
const dependenciasService = require ('../services/dependencias-service');
const usuariosService = require ('../services/usuarios-service');
const equipamientoService = require ('../services/equipamiento-service');

module.exports = {
    alta: function(req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        const obtenerDependenciasAlmacenadas = dependenciasService.obtenerDependenciasAlmacenadas();
        const obtenerUsuariosAlmacenados = usuariosService.obtenerUsuariosAlmacenados();
        const obtenerEquipamientoAlmacenados = equipamientoService.obtenerEquipamientoAlmacenado();

        Promise.all([obtenerDependenciasAlmacenadas,obtenerUsuariosAlmacenados,obtenerEquipamientoAlmacenados])
            .then(([listadoDependencias,listadoUsuarios,listadoEquipos])=>{
                res.render('incidentes/incidentesAlta',{
                    errors: errors ? errors : '',
                    oldData: oldData ? oldData : '',
                    listadoDependencias: listadoDependencias ? listadoDependencias : '',
                    listadoUsuarios: listadoUsuarios ? listadoUsuarios : '',
                    listadoEquipos : listadoEquipos ? listadoEquipos : ''
                });
            })
            .catch((e)=>{
                console.log(e)
            });
    },

    guardar: function(req,res){
        incidentesService.guardarIncidente(req.body,req.session.operadorLogueado)
            .then((incidenteGuardado) => {
                console.log (`Se creo el incidente numero: ${incidenteGuardado.nroIncidenteId}`); 
                res.redirect('/incidentes/listado');
            })
            .catch((e) => {
                console.log(e)
            })
    }, 
    listado: function(req,res){
        incidentesService.obtenerIncidentesAlmacenados()
            .then((listadoIncidentes) => {
                const incidentesOperadorLogueado = listadoIncidentes.filter((unIncidente)=>{
                    return unIncidente.cuilOperadorIdAsignado == req.session.operadorLogueado.cuilOperadorId
                });
                const incidentesAsignadosTaller = listadoIncidentes.filter((unIncidente)=>{
                    return unIncidente.codigoAreaId == 'dgt-taller'
                });
                const incidentesPrestamos = listadoIncidentes.filter((unIncidente)=>{
                    return unIncidente.estado == 'prestamo'
                });
                res.render('incidentes/incidentesListado.ejs',{
                    incidentesOperadorLogueado: incidentesOperadorLogueado ? incidentesOperadorLogueado : [],
                    incidentesAsignadosTaller: incidentesAsignadosTaller ? incidentesAsignadosTaller : [],
                    incidentesPrestamos: incidentesPrestamos ? incidentesPrestamos : []
                });
            })
            .catch((e)=>{
                console.log(e);
            });
    }
}