const usuariosService = require ('../services/usuarios-service');
const dependenciasService = require ('../services/dependencias-service');

module.exports = {
    alta: function(req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null; 
        dependenciasService.obtenerDependenciasAlmacenadas()
            .then((listadoDependencias) => {
                res.render('usuarios/usuariosAlta', {
                    errors: errors ? errors : null,
                    oldData: oldData ? oldData : null,
                    listadoDependencias: listadoDependencias ? listadoDependencias : ''
                })
            })
            .catch((e)=>{
                console.log(e)
            });
        },

    listado: function(req,res){
        usuariosService.obtenerUsuariosAlmacenados()
            .then((listadoUsuarios) => {
                res.render('usuarios/usuariosListado', {listadoUsuarios: listadoUsuarios});
            })
            .catch((e) => {
                console.log(e);
            });
    },

    guardar: function(req,res){
        usuariosService.guardarUsuario(req.body);
        res.redirect('/usuarios/listado');
    }

}