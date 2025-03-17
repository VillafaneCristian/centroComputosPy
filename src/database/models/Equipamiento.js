
module.exports = function (sequelize, dataTypes){

    const alias = 'Equipamiento';

    const cols = {

        nroSerieId: {
            primaryKey: true,
            autoIncrement: false,
            type: dataTypes.STRING
        },

        tipoEquipamientoId: {
            type: dataTypes.INTEGER
        },

        marcasModelosId: {
            type: dataTypes.STRING
        },

        hostname: {
            type: dataTypes.STRING
        },

        nroIp: {
            type: dataTypes.STRING
        },

        ipFija: {
            type: dataTypes.STRING
        },

        estado: {
            type: dataTypes.STRING
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

        codigoDependenciaId: {
            type: dataTypes.STRING
        },

        cuilUsuarioId: {
            type: dataTypes.STRING
        },

        internetHabilitado: {
            type: dataTypes.STRING
        },

        aclId: {
            type: dataTypes.INTEGER
        },

        inventario: {
            type: dataTypes.STRING
        },

        ordenCompra: {
            type: dataTypes.STRING
        },

        detalleOrdenCompra: {
            type: dataTypes.STRING
        },

        comentarios: {
            type: dataTypes.STRING
        }
    };

    const config = {
        tableName: 'equipos',
        timestamps: false,
        underscored: false
    };

    const Equipamiento = sequelize.define(alias , cols , config);

    Equipamiento.associate = function (models){
        Equipamiento.belongsTo(models.TipoEquipamiento,{
            as:'tipoEquipamiento',
            foreignKey: 'tipoEquipamientoId'
        }); 
        Equipamiento.belongsTo(models.MarcaModelo,{
            as:'marcaModelo',
            foreignKey: 'marcasModelosId'
        }); 

        Equipamiento.belongsTo(models.Estado,{
            as: 'estado',
            foreignKey: 'estadoId'
        });

        Equipamiento.belongsTo(models.Dependencia,{
            as: 'dependencia',
            foreignKey: 'codigoDependenciaId'
        });
        Equipamiento.belongsTo(models.Usuario,{
            as: 'Usuario',
            foreignKey: 'cuilUsuarioId'
        });
        Equipamiento.belongsTo(models.Acl,{
            as: 'acl',
            foreignKey:'aclId'
        });
        Equipamiento.hasMany(models.Incidente,{
            as: 'incidentes',
            foreignKey: 'nroSerieId'
        });
    };

    return Equipamiento;
}