const db = require ('../database/models/index');

module.exports = {

    guardarDependencia: (dependenciaData) => {
        db.Dependencia.create({
            codigoDependenciaId: dependenciaData.codigo,
            nombre: dependenciaData.nombre,
            email: dependenciaData.email,
            telefono: dependenciaData.telefono,
            piso: dependenciaData.piso,
            lado: dependenciaData.lado,
            descripcion: dependenciaData.comentarios
        })
        .then((dependenciaGuardada) => {
            console.log('Se da de alta la dependencia: ' + dependenciaGuardada.nombre);
        })
        .catch((e)=>{
            console.log(e)
        });
    }

}