const db = require ('../database/models/index');

module.exports = {

    guardarAcl: function (aclData){
        //console.log(aclData);
        return db.Acl.create({
            nombre: aclData.tipo,
            descripcion: aclData.descripcion
        });
    },

    obtenerAclsAlmacenados: function(){
        return db.Acl.findAll();
    }

}