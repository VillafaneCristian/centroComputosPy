module.exports = function (sequelize, dataTypes){

    const alias = 'ClasificacionIncidente'; 

    const cols = {
        clasificacionIncidenteId: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },

        nombreClasificacion: {
            type: dataTypes.STRING
        }
    };

    const config = {
        tableName: 'clasificacionIndidentes',
        timestamps: false,
        underscored: false

    };

    const Estado = sequelize.define (alias , cols , config);

    ClasificacionIncidente.associate = function(models){
        ClasificacionIncidente.hasMany (models.Incidente, {
            as: 'incidentes',
            foreignKey: 'clasificacionIncidenteId'
        });
    }

    return Estado;

}