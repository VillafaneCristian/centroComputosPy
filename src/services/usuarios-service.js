const db = require ('../database/models/index');

module.exports = {

    guardarUsuario: function (usuarioData){
        db.Usuario.create({
            cuilUsuarioId: usuarioData.cuil,
            nombre: usuarioData.nombre,
            apellido: usuarioData.apellido,
            email: usuarioData.email,
            telefono: usuarioData.telefono,
            comentario: usuarioData.comentarios,
            codigoDependenciaId: usuarioData.dependencia
        })
        .then((usuarioGuardado => {
            console.log(`Se creó el usuario ${usuarioGuardado.nombre} + ${usuarioGuardado.apellido}`);
        }))
        .catch((e) => {
            console.log(e); 
        })
    },

    obtenerUsuariosAlmacenados: function(){
        return db.Usuario.findAll();
    },

    obtenerUsuarioPorCuil: function(usuarioCuil){
        return db.Usuario.findByPk(usuarioCuil);
    }

}
