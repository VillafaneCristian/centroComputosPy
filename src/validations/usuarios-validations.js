const {body} = require ('express-validator');

module.exports = [

    body('cuil').notEmpty().withMessage('El campo cuil no puede estar vacío'),
    body('nombre').notEmpty().withMessage('El campo nombre no puede estar vacío'),
    body('apellido').notEmpty().withMessage('El campo apellido no puede estar vacío'),
    body('email')
        .notEmpty().withMessage('El campo email no puede estar vacío').bail()
        .isEmail().withMessage('El campo no tiene un formato de email valido'),
    body('dependencia').notEmpty().withMessage('Debe seleccionar una opción')
];