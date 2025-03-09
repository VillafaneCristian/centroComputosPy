const incidentesService = require ('../services/incidentes-service');
const dependenciasService = require ('../services/dependencias-service');
const usuariosService = require ('../services/usuarios-service');
const equipamientoService = require ('../services/equipamiento-service');
const areasService = require ('../services/areas-service');
const operadoresService = require ('../services/operadores-service');
const tiposEquipamiento = require ('../services/tiposEquipamiento-service');

module.exports = {
    alta: function(req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        const obtenerDependenciasAlmacenadas = dependenciasService.obtenerDependenciasAlmacenadas();
        const obtenerUsuariosAlmacenados = usuariosService.obtenerUsuariosAlmacenados();
        const obtenerEquipamientoAlmacenados = equipamientoService.obtenerEquipamientoAlmacenado();
        const obtenerTiposEquipamiento = tiposEquipamiento.obtenerTiposEquipamientoAlmacenados();

        Promise.all([obtenerDependenciasAlmacenadas,obtenerUsuariosAlmacenados,obtenerEquipamientoAlmacenados,obtenerTiposEquipamiento])
            .then(([listadoDependencias,listadoUsuarios,listadoEquipos,listadoTiposEquipamiento])=>{
                res.render('incidentes/incidentesAlta',{
                    errors: errors ? errors : '',
                    oldData: oldData ? oldData : '',
                    listadoDependencias: listadoDependencias ? listadoDependencias : '',
                    listadoUsuarios: listadoUsuarios ? listadoUsuarios : '',
                    listadoEquipos : listadoEquipos ? listadoEquipos : '',
                    listadoTiposEquipamiento: listadoTiposEquipamiento ? listadoTiposEquipamiento : ''
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
                    return (unIncidente.cuilOperadorIdAsignado == req.session.operadorLogueado.cuilOperadorId) && (unIncidente.estado == 'abierto')
                });
                console.log(incidentesOperadorLogueado);
                const incidentesAsignadosTaller = listadoIncidentes.filter((unIncidente)=>{
                    return (unIncidente.codigoAreaId == 'dgt-taller') && (unIncidente.estado == 'abierto')
                });
                const incidentesPrestamos = listadoIncidentes.filter((unIncidente)=>{
                    return (unIncidente.clasificacionIncidente == 'prestamo') && (unIncidente.estado == 'abierto')
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
    }, 
    editar: function (req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        console.log(errors); 

        const obtenerAreasAlmacenadas = areasService.obtenerAreasAlmacenadas();
        const obtenerOperadoresAlmacenados = operadoresService.obtenerOperadoresAlmacenados();
        const obtenerIncidentePorId = incidentesService.obtenerIncidentePorId(req.params.numeroIncidente);

        Promise.all([obtenerAreasAlmacenadas,obtenerOperadoresAlmacenados, obtenerIncidentePorId])
            .then(([listadoAreas, listadoOperadores, incidenteEncontrado])=>{
                res.render('incidentes/incidentesModificacion',{
                    listadoAreas: listadoAreas ? listadoAreas : '',
                    listadoOperadores: listadoOperadores ? listadoOperadores : '',
                    incidenteEncontrado: incidenteEncontrado ? incidenteEncontrado : '',
                    errors: errors ? errors : '',
                    oldData: oldData ? oldData : ''
                }); 
            })
            .catch((e)=>{
                console.log(e);
            });
    },

    procesarEditar: function(req,res){
        incidentesService.actualizarDatosIncidente(req.body)
            .then((filaActualizada)=>{
                res.redirect('/incidentes/listado');
            })
            .catch((e)=>{
                console.log(e);
            }); 
    },

    cerrar: function(req,res){
        incidentesService.obtenerIncidentePorId(req.params.numeroIncidente)
            .then((incidenteEncontrado)=>{
                console.log(incidenteEncontrado); 
                res.render('incidentes/incidentesCerrar',{
                    incidenteEncontrado: incidenteEncontrado ? incidenteEncontrado : ''
                });
            })
            .catch((e)=>{
                console.log(e)
            })
    },

    procesarCierre: function(req,res){
        incidentesService.cerrarIncidente(req.body)
            .then((incidenteCerrado)=>{
                res.redirect('/incidentes/listado');
            })
            .catch((e)=>{
                console.log(e)
            }) 
    }, 

    prestamoAlta: function(req,res){
        res.render('incidentes/incidentePrestamoAlta'); 
    }
}