const db = require ('../database/models/index');

module.exports = {

    obtenerEquipamientoAlmacenado: function (){
        return db.Equipamiento.findAll()
    },

    guardarEquipamiento: function (equipamientoData){
        return db.Equipamiento.create({
            nroSerieId: equipamientoData.numeroSerie,
            tipoEquipamientoId: equipamientoData.tipoEquipamiento,
            marca: equipamientoData.marca,
            modelo: equipamientoData.modelo,
            hostname: equipamientoData.hostname,
            nroIp: equipamientoData.numeroIp,
            estado: equipamientoData.estado,
            foto: equipamientoData.foto,
            procesador: equipamientoData.procesador,
            memoriaRam: equipamientoData.memoriaRam,
            tipoDiscoRigido: equipamientoData.tipoDisco,
            capacidadDiscoRigido: equipamientoData.capacidadDisco,
            lectograbadoraDVD: equipamientoData.lectograbadoraDVD,
            sistemaOperativo: equipamientoData.sistemaOperativo,
            codigoDependenciaId: equipamientoData.dependencia,
            cuilUsuarioId: equipamientoData.usuario,
            internetHabilitado: equipamientoData.internet,
            aclId: equipamientoData.aclAsignado,
            comentarios: equipamientoData.detalles 
        });
    },

    obtenerPorTipo: function(tipoEquipo){
        return db.Equipamiento.findAll({
            where:{tipoEquipamientoId: tipoEquipo}
        });
    }    

}