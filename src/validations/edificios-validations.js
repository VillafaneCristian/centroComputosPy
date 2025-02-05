const {body} = require ('express-validator');

module.exports = [
    body('ubicacion').notEmpty().withMessage('El campo ubicacion no puede estar vacío')
];