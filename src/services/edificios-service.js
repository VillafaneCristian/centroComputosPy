const db = require ('../database/models/index');

module.exports = {

    guardarEdificio: function (edificioData){
        db.Edificio.create({
            ubicacion: edificioData.ubicacion,
            localidad: edificioData.localidad,
            codigoPostal: edificioData.codigoPostal,
            descripcion: edificioData.descripcion
        })
        .then((edificioGuardado)=>{
            console.log(`Se dio de alta el edificio: ${edificioGuardado.ubicacion}`)
        })
        .catch((e)=>{
            console.log(e);
        })
    },

    obtenerEdificiosAlmacenados: function(){
        return db.Edificio.findAll();
    }

}