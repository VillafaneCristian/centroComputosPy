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
    return Acl;

}