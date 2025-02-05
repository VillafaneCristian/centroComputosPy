module.exports = function (sequelize , dataTypes) {

    const alias = 'Edificio';

    const cols = {
        edificioId: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
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
    return Edificio;
}