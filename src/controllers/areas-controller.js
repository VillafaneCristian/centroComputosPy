module.exports = {

    alta: function (req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        console.log(errors);
        res.render('areas/areasAlta',
            {errors: errors ? errors : '',
             oldData: oldData ? oldData : ''   
            }
        );
    },

    guardar: function (req,res){
        res.send(req.body);
    }

};