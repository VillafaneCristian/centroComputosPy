module.exports = {
    alta: function(req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null; 
        res.render('usuarios/usuariosAlta', {
            errors: errors ? errors : null,
            oldData: oldData ? oldData : null
        });
    },

    listado: function(req,res){
        res.render('usuarios/usuariosListado');
    },

    guardar: function(req,res){
        res.send(req.body);
    }

}