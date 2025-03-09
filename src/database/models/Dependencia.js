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
            type: dataTypes.STRING
        },

        piso: {
            type: dataTypes.STRING
        },

        lado: {
            type: dataTypes.STRING
        },

        edificioId: {
            type: dataTypes.INTEGER
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

    Dependencia.associate = function (models) {
        Dependencia.hasMany(models.Usuario, {
            as:'usuarios',
            foreignKey: 'codigoDependenciaId'
        });
        Dependencia.hasMany(models.Equipamiento,{
            as: 'equipamientos',
            foreignKey: 'codigoDependenciaId'
        });
        Dependencia.hasMany(models.Incidente,{
            as: 'incidentes',
            foreignKey: 'codigoDependenciaId'
        });
        Dependencia.belongsTo(models.Edificio,{
            as: 'edificio',
            foreignKey: 'edificioId'
        });
    };

    return Dependencia;
}