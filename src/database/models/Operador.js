module.exports = function (sequelize, dataTypes){

    const alias = 'Operador'; 

    const cols = {
        cuilOperadorId: {
            autoIncrement: false,
            primaryKey: true,
            type: dataTypes.INTEGER
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
        codigoAreaId: {
            type: dataTypes.STRING
        },
        avatar:{
            type: dataTypes.STRING
        },
        contrasenia:{
            type: dataTypes.STRING
        }
    };

    const config = {
        tableName:  'operadores',
        timestamps: false,
        underscored: false
    };
    
    const Operador = sequelize.define (alias, cols, config);

    Operador.associate = function (models) {
        Operador.belongsTo(models.Area, {
            as: 'Area',
            foreignKey: 'codigoAreaId'
        });
    };

    return Operador;  
};