const {body} = require ('express-validator');

module.exports = [
    body('codigo').notEmpty().withMessage('El campo código no puede estar vacío'),
    body('nombre').notEmpty().withMessage('El campo nombre no puede estar vacío'),
    body('email')
        .notEmpty().withMessage('El campo email no puede estar vacío').bail()
        .isEmail().withMessage('El campo no tiene un formato de email válido'),
    body('edificio').notEmpty().withMessage('El campo edificio no puede estar vacío')  
];