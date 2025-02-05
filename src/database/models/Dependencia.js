module.exports = (sequelize, dataTypes) => {

    const alias= 'Dependencia'; 

    const cols = {
        codigoDependenciaId: {
            primaryKey: true,
            autoIncrement: false,
            type: dataTypes.STRING
        },

        nombre: {
            type: dataTypes.STRING
        },

        email: {
            type: dataTypes.STRING
        },

        telefono: {
            type: dataTypes.INTEGER
        },

        piso: {
            type: dataTypes.STRING
        },

        lado: {
            type: dataTypes.STRING
        },

        descripcion: {
            type: dataTypes.STRING
        }
    };

    const config = {
        tableName: 'dependencias',
        timestamps: false,
        underscored: false
    };

    const Dependencia = sequelize.define(alias, cols, config);
    return Dependencia;
}