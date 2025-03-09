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
        return db.Incidente.findAll({
            attributes: [
                "nroIncidenteId",
                "codigoDependenciaId",
                "cuilUsuarioId",
                "fechaAlta",
                "clasificacionIncidente",
                "estado",
                "nroSerieId",
                "codigoAreaId",
                "cuilOperadorIdAlta",
                "cuilOperadorIdAsignado",
                "tituloIncidente",
                "descripcionIncidente",
                "detalles",
                "descripcionCierre",
                "fechaCierre"
            ],
        });
    },

    obtenerIncidentePorId: function(numeroIncidente){
        console.log(numeroIncidente);
        return db.Incidente.findByPk(numeroIncidente,{
            attributes: [
                "nroIncidenteId",
                "codigoDependenciaId",
                "cuilUsuarioId",
                "fechaAlta",
                "clasificacionIncidente",
                "estado",
                "nroSerieId",
                "codigoAreaId",
                "cuilOperadorIdAlta",
                "cuilOperadorIdAsignado",
                "tituloIncidente",
                "descripcionIncidente",
                "detalles",
                "descripcionCierre",
                "fechaCierre"
            ],
        }); 
    },

    actualizarDatosIncidente: function (incidenteData){
        return db.Incidente.update({
            clasificacionIncidente: incidenteData.clasificacionIncidente,
            codigoAreaId: incidenteData.areaAsignada,
            cuilOperadorIdAsignado: incidenteData.operador,
            detalles: incidenteData.detalles
        },
        {
            where:{nroIncidenteId: incidenteData.numeroIncidente}
        });
    },

    cerrarIncidente: function(incidenteData){
        return db.Incidente.update({
            estado: 'cerrado',
            descripcionCierre: incidenteData.detalleCierre,
            fechaCierre: Date.now()
        },
        {
            where: {nroIncidenteId: incidenteData.numeroIncidente}
        }); 
    }
};