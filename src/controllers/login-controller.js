module.exports = {

    mostrarLogin: function(req,res) {
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        res.render('login/login', {
            errors: errors ? errors : '',
            oldData: oldData ? oldData : ''
        });
    },

    procesarLogin: function (req,res){
        res.redirect('/')
    }

};