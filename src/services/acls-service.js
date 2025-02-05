const db = require ('../database/models/index');

module.exports = {

    guardarAcl: function (aclData){
        console.log(aclData);
        db.Acl.create({
            nombre: aclData.tipo,
            descripcion: aclData.descripcion
        })
        .then((aclGuardado) => {
            console.log(`Se creo el acl: ${aclGuardado.nombre}`);
        })
        .catch((e) => {
            console.log(e);
        })
    }

}