const db = require ('../database/models/index');

module.exports = {

    guardarEdificio: function (edificioData){
        db.Edificio.create({
            ubicacion: edificioData.ubicacion,
            descripcion: edificioData.descripcion
        })
        .then((edificioGuardado)=>{
            console.log(`Se dio de alta el edificio: ${edificioGuardado.ubicacion}`)
        })
        .catch((e)=>{
            console.log(e);
        })
    }

}