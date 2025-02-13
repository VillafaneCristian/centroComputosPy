const dependenciasService = require ('../services/dependencias-service');

module.exports = {
    alta: function (req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null; 
        res.render('dependencias/dependenciasAlta',
            {
                errors: errors ? errors : '',
                oldData: oldData ? oldData : ''
            }
        ); 
    },

    listado: function(req,res){
        dependenciasService.obtenerDependenciasAlmacenadas()
        .then((listadoDependencias) => {
            res.render('dependencias/dependenciasListado',{listadoDependencias:listadoDependencias});
        })
        .catch((e)=>{
            console.log(e);
        });     
    },

    guardar: function(req,res){
        dependenciasService.guardarDependencia(req.body)
        .then((dependenciaGuardada) => {
            console.log('Se da de alta la dependencia: ' + dependenciaGuardada.nombre);
        })
        .catch((e)=>{
            console.log(e)
        });
        res.redirect('/dependencias/listado'); 
    },

    ver: function(req,res){
        const codigoDependencia = req.params.codigoDependencia;
        dependenciasService.obtenerDependenciaPorCodigo(codigoDependencia)
            .then((dependenciaEncontrada)=>{
                res.render('dependencias/dependenciasVer',{dependenciaEncontrada:dependenciaEncontrada});
            })
            .catch((e)=>{
                console.log(e);
            });
    }
}