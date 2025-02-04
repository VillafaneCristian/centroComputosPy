const {body} = require ('express-validator');

module.exports = [
    body('tipo').notEmpty().withMessage('El campo tipo no puede estar vacio'),
    body('descripcion').notEmpty().withMessage('El campo descripcion no puede estar vacío')
];