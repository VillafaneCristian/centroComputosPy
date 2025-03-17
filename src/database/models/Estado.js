module.exports = function (sequelize, dataTypes){

    const alias = 'Estado'; 

    const cols = {
        estadoId: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },

        estado: {
            type: dataTypes.STRING
        }
    };

    const config = {
        tableName: 'estados',
        timestamps: false,
        underscored: false

    };

    const Estado = sequelize.define (alias , cols , config);

    Estado.associate = function(models){
        Estado.hasMany (models.Equipamiento, {
            as: 'equipamientos',
            foreignKey: 'estadoId'
        });
    }

    return Estado;

}