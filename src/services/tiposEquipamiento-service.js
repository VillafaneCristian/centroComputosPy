const db = require ('../database/models/index');

module.exports = {

    guardarTipoEquipamiento: (tipoEquipamientoData) => {
        db.TipoEquipamiento.create({
            tipo: tipoEquipamientoData.tipo,
            descripcion: tipoEquipamientoData.descripcion
        })
        .then((tipoEquipamientoNuevo) => {
            console.log('Se creo el tipo de equipamiento: ' + tipoEquipamientoNuevo.tipo);
        })
        .catch((e) => {
            console.log(e);
        });
    },

    obtenerTiposEquipamientoAlmacenados: function(){
        return db.TipoEquipamiento.findAll();
    }

}