const db = require ('../database/models/index');

module.exports = {

    guardarEquipamiento: function (equipamientoData){
        console.log(equipamientoData); 
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
            codigoDependenciaId: equipamientoData.dependencia,
            cuilUsuarioId: equipamientoData.usuario,
            internetHabilitado: equipamientoData.internet,
            aclId: equipamientoData.aclAsignado,
            comentarios: equipamientoData.detalles 
        });
    }


}