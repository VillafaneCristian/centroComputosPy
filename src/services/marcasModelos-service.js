const db = require ('../database/models/index');

module.exports = {

    obtenerPorTipoEquipo: function(tipoEquipo){
        return db.MarcaModelo.findAll({
            where: {tipoEquipamientoId: tipoEquipo}
        });
    }


}