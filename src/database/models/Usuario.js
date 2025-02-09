module.exports = function (sequelize, dataTypes){

    const alias = 'Usuario';

    const cols = {
        cuilUsuarioId: {
            primaryKey: true,
            autoIncrement: false,
            type: dataTypes.STRING
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
        comentario: {
            type: dataTypes.STRING
        },
        codigoDependenciaId: {
            type: dataTypes.STRING
        }

    };

    const config = {
        tableName: 'usuarios',
        timestamps: false,
        underscored: false
    }


    const Usuario = sequelize.define(alias , cols , config);

    Usuario.associate = function (models){
        Usuario.belongsTo (models.Dependencia, {
            as: 'dependencia',
            foreignKey: 'codigoDependenciaId'
        });
    }

    return Usuario;
}