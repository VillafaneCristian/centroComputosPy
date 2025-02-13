const db = require ('../database/models/index');
const { obtenerAclsAlmacenados } = require('./acls-service');

module.exports = {

    guardarDependencia: (dependenciaData) => {
        return db.Dependencia.create({
            codigoDependenciaId: dependenciaData.codigo,
            nombre: dependenciaData.nombre,
            email: dependenciaData.email,
            telefono: dependenciaData.telefono,
            piso: dependenciaData.piso,
            lado: dependenciaData.lado,
            descripcion: dependenciaData.comentarios
        });
    },
    
    obtenerDependenciasAlmacenadas: function(){
        return db.Dependencia.findAll();
    },

    obtenerDependenciaPorCodigo: function(dependenciaCodigo){
        return db.Dependencia.findByPk(dependenciaCodigo);
    }
}