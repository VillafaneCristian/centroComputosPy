module.exports = function (sequelize, dataTypes){
    const alias = 'Incidente';

    const cols = {
        nroIncidenteId: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        codigoDependenciaId: {
            type: dataTypes.STRING
        },
        cuilUsuarioId: {
            type: dataTypes.STRING
        },
        fechaAlta: {
            type: dataTypes.DATE
        },
        clasificacionIncidenteId: {
            type: dataTypes.INTEGER
        },
        estado: {
            type: dataTypes.STRING
        },
        nroSerieId: {
            type: dataTypes.STRING
        },
        codigoAreaId: {
            type: dataTypes.INTEGER
        },
        cuilOperadorIdAlta: {
            type: dataTypes.INTEGER
        },
        cuilOperadorIdAsignado: {
            type: dataTypes.INTEGER
        },
        tituloIncidente: {
            type: dataTypes.STRING
        },
        descripcionIncidente: {
            type: dataTypes.STRING
        },
        detalles: {
            type: dataTypes.STRING
        },
        descripcionCierre: {
            type: dataTypes.STRING
        },
        fechaCierre: {
            type: dataTypes.DATE
        }
    };

    const config = {
        tableName: 'incidentes',
        timestamps: false,
        underscored: false
    }

    const Incidente = sequelize.define(alias , cols , config);

    Incidente.associate = function (models){
        
        Incidente.belongsTo(models.Dependencia,{
            as: 'dependencia',
            foreignKey: 'codigoDependenciaId'
        });
        Incidente.belongsTo(models.Usuario,{
            as: 'usuario',
            foreignKey: 'cuilUsuarioId'
        });
        Incidente.belongsTo(models.ClasificacionIncidente,{
            as: 'clasificacionesIncidentes',
            foreignKey: 'clasificacionIncidenteId'
        });
        Incidente.belongsTo(models.Equipamiento,{
            as: 'equipamiento',
            foreignKey: 'nroSerieId'
        });
        Incidente.belongsTo(models.Area,{
            as: 'area',
            foreignKey: 'codigoAreaId'
        });
        Incidente.belongsTo(models.Operador,{
            as: 'operadorAlta',
            foreignKey: 'cuilOperadorIdAlta'
        });
        Incidente.belongsTo(models.Operador,{
            as: 'operadorAsignado',
            foreignKey: 'cuilOperadorIdAsignado'
        });
    };

    return Incidente; 
}