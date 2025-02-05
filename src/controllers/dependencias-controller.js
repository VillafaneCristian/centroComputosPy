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
        res.render('dependencias/dependenciasListado');
    },

    guardar: function(req,res){
        dependenciasService.guardarDependencia(req.body)
        res.redirect('/operadores/listado'); 
    }
}