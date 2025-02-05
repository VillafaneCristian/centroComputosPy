module.exports = (sequelize, dataTypes) => {

    const alias = 'TipoEquipamiento';

    const cols= {

        tipoEquipamientoId:{
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        tipo: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        }
    };

    const config = {
        tableName: 'tiposEquipamiento',
        timestamps: false,
        underscored: false
    };

    const TipoEquipamiento = sequelize.define(alias , cols , config);
    return TipoEquipamiento;
};