const {body} = require ('express-validator');

module.exports = [
    body('tipo').notEmpty().withMessage('El campo tipo no puede estar vacío')
];