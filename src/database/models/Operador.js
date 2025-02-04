module.exports = function (sequelize, dataTypes){

    const alias = 'Operador'; 

    const cols = {
        cuilOperador_id: {
            autoIncrement: false,
            PrimaryKey: true,
            type: dataTypes.BIGINT
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        telefono: {
            type: dataTypes.STRING
        },
        codigoArea_id: {
            type: dataTypes.STRING
        },
        contrasenia:{
            type: dataTypes.STRING
        }
    };

    const config = {
        tableName:  'operadores',
        timestamps: false,
        underscored: true
    };
    
    const Operador = sequelize.define(alias, cols, config);
    return Operador;  
};