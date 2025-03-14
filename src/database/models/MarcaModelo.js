module.exports = function (sequelize, dataTypes){

    const alias = 'MarcaModelo';

    cols = {

        marcasModelosId: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },

        marcaModelo: {
            type: dataTypes.STRING
        },

        tipoEquipamientoId: {
            type: dataTypes.INTEGER
        },

        procesador: {
            type: dataTypes.STRING
        },

        memoriaRam: {
            type: dataTypes.STRING
        },

        tipoDiscoRigido: {
            type: dataTypes.STRING
        },

        capacidadDiscoRigido: {
            type: dataTypes.STRING
        },

        lectograbadoraDVD:{
            type: dataTypes.STRING
        },

        sistemaOperativo:{
            type: dataTypes.STRING
        },

        foto: {
            type: dataTypes.STRING
        },

        detalles: {
            type: dataTypes.STRING
        }


    };

    config = {
        tableName: 'MarcasModelos',
        timestamps: false,
        underscored: false
    }

    const MarcaModelo = sequelize.define(alias, cols, config);

    MarcaModelo.associate = function(models){
        MarcaModelo.hasMany(models.Equipamiento,{
            as: 'equipamientos',
            foreignKey: 'marcasModelosId'
        })
    }

    return MarcaModelo; 


}