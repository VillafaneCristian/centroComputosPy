const {body} = require ('express-validator');

module.exports = [
    body('cuil').notEmpty().withMessage('El campo cuil no puede estar vacio'),
    body('contrasenia').notEmpty().withMessage('El campo password no puede estar vacío')
];