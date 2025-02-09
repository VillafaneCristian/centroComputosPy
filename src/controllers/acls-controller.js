const aclsService = require ('../services/acls-service');

module.exports = {

    alta: function(req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null,
        req.session.oldData = null, 
        res.render('acls/aclsAlta',
            {errors: errors ? errors : null,
             oldData: oldData ? oldData : null
            }
        );
    },

    guardar: function(req,res){
        aclsService.guardarAcl(req.body)
        .then((aclGuardado) => {
                    console.log(`Se creo el acl: ${aclGuardado.nombre}`);
                    res.redirect('/acls/listado');
                })
                .catch((e) => {
                    console.log(e);
                });
    },

    listado: function(req,res){
        aclsService.obtenerAclsAlmacenados()
            .then((listadoAcls)=>{
                res.render('acls/aclsListado',{listadoAcls:listadoAcls});
            })
            .catch((e) => {
                console.log(e);
            });
        
    }
};