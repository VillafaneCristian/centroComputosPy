module.exports = function (sequelize, dataTypes) {

    const alias = 'Acl';

    const cols = {
        aclId: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        }
    };

    const config = {
        tableName: 'acls',
        timestamps: false,
        underscored: false
    }
    
    const Acl = sequelize.define (alias , cols , config);

    Acl.associate = function (models) {
        Acl.hasMany(models.Equipamiento, {
            as: 'equipamientos',
            foreignKey: 'aclId'
        });
    }

    return Acl;

}