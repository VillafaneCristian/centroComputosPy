const {body} = require ('express-validator');

module.exports = [
    body('codigo').notEmpty().withMessage('El campo codigo no puede estar vacío'),
    body('nombre').notEmpty().withMessage('El campo nombre no puede estar vacío'),
    body('email')
        .notEmpty().withMessage('El campo email no puede estar vacío').bail()
        .isEmail().withMessage('El campo no tiene un formato de email válido'),
    body('lado').notEmpty().withMessage('El campo lado no puede estar vacío'),
    body('piso').notEmpty().withMessage('El campo piso no puede estar vacío')
];