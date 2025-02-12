const db = require ('../database/models/index');

module.exports = {

    guardarIncidente: function (incidenteData, operadorLogueadoData){
       return db.Incidente.create({
            codigoDependenciaId: incidenteData.dependencia,
            cuilUsuarioId: incidenteData.usuario,
            nroSerieId: incidenteData.numeroSerie,
            clasificacionIncidente: incidenteData.clasificacionIncidente,
            tituloIncidente: incidenteData.tituloIncidente,
            descripcionIncidente: incidenteData.descripcionIncidente,
            fechaAlta: Date.now(),
            estado: 'abierto',
            codigoAreaId: operadorLogueadoData.codigoAreaId,
            cuilOperadorIdAlta: operadorLogueadoData.cuilOperadorId,
            cuilOperadorIdAsignado: operadorLogueadoData.cuilOperadorId
       });
    },
    
    obtenerIncidentesAlmacenados: function(){
        return db.Incidente.findAll();
    }
};