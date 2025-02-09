module.exports = function (sequelize, dataTypes) {

    const alias = 'Area';

    const cols = {
        codigoAreaId: {
            primaryKey: true,
            autoIncrement: false,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.INTEGER
        },
        encargado: {
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.INTEGER
        },
        telefono: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.INTEGER
        },
        edificioId: {
            type: dataTypes.INTEGER
        }
    };

    const config = {
        tableName: 'areas',
        timestamps: false,
        underscored: false

    };
    const Area = sequelize.define(alias , cols , config);

    
    Area.associate = function (models){
        Area.belongsTo(models.Edificio,{
            as: 'edificio',
            foreignKey: 'edificioId'
        });
        Area.hasMany (models.Operador, {
            as: 'operadores',
            foreignKey: 'codigoAreaId'
        });
    };
    return Area;
}