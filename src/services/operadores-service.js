const db = require ('../database/models/index');
const bcryptjs = require ('bcryptjs');

module.exports = {

    guardarOperador: (operadorData) => {
        db.Operador.create({
            cuilOperadorId: operadorData.cuil,
            nombre: operadorData.nombre,
            apellido: operadorData.apellido,
            email: operadorData.email,
            telefono: operadorData.telefono,
            codigoAreaId: operadorData.area,
            avatar: 'default.jpg',
            contrasenia: bcryptjs.hashSync(operadorData.contrasenia,10)
        });
    },

    obtenerOperadoresAlmacenados: function(){
        return db.Operador.findAll();
    },

    obtenerOperadorPorCuil: function(operadorCuil) {
        return db.Operador.findByPk(operadorCuil); 
    }

};