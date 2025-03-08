const db = require ('../database/models/index');

module.exports = {

    guardarArea: function (areaData){
        console.log(areaData); 
        db.Area.create({
            codigoAreaId: areaData.codigo,
            nombre: areaData.nombre,
            encargado: areaData.encargado,
            email: areaData.email,
            telefono: areaData.telefono,
            descripcion: areaData.comentarios,
            edificioId: areaData.edificio
        })
        .then((areaGuardada) => {
            console.log(`Se creo el area ${areaGuardada.nombre}`);
        })
        .catch((e)=>{
            console.log(e);
        })
    },

    obtenerAreasAlmacenadas: function(){
        return db.Area.findAll();
    },

    obtenerAreaPorCodigo: function(codigoArea){
        return db.Area.findByPk(codigoArea);
    },

    actualizarDatosArea: function(areaData){
        return db.Area.update({
            nombre: areaData.nombre,
            encargado: areaData.encargado,
            email: areaData.email,
            telefono: areaData.telefono,
            descripcion: areaData.comentarios,
            edificioId: areaData.edificio
        },
        {
            where: {codigoAreaId: areaData.codigo}
        });
    },

    eliminarArea: function(codigoArea){
        return db.Area.destroy({
            where:{codigoAreaId: codigoArea} 
        });
    }
};