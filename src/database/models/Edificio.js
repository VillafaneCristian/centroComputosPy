module.exports = function (sequelize , dataTypes) {

    const alias = 'Edificio';

    const cols = {
        edificioId: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        localidad: {
            type: dataTypes.STRING
        },
        codigoPostal: {
            type: dataTypes.STRING
        },
        ubicacion: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        }

    };

    const config = {
        tableName: 'edificios',
        timestamps: false,
        underscored: false
    }

    const Edificio = sequelize.define(alias , cols , config);

    Edificio.associate = function(models){
        Edificio.hasMany (models.Area, {
            as: 'areas',
            foreignKey: 'edificioId'
        });
        Edificio.hasMany (models.Dependencia, {
            as: 'dependencias',
            foreignKey: 'edificioId'
        });
    }
    

    return Edificio;
}