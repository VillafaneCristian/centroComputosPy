module.exports = {

    alta: function(req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        res.render('operadores/operadoresAlta',
            {
                errors: errors ? errors : null,
                oldData: oldData ? oldData : null
            }
        ); 
    },

    guardar: function(req,res) {
        res.send(req.body);
    },

    listado: function(req,res){
        res.render('operadores/operadoresListado');
    }

}