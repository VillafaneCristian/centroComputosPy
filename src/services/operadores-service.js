const db = require ('../database/models/index');

module.exports = {

    guardarOperador: (operadorData) => {
        db.Operador.create({
            cuilOperadorId: operadorData.cuil,
            nombre: operadorData.nombre,
            apellido: operadorData.apellido,
            email: operadorData.email,
            telefono: operadorData.telefono,
            //codigoAreaId: operadorData.area,
            avatar: 'default.jpg',
            contrasenia: operadorData.contrasenia
        });
    }

};