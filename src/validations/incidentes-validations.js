const {body} = require ('express-validator');

module.exports = [
    body('dependencia').notEmpty().withMessage('El campo dependencia no puede estar vacío'),
    body('usuario').notEmpty().withMessage('El campo usuario no puede estar vacío'),
    body('clasificacionIncidente').notEmpty().withMessage('El campo clasificación no puede estar vacío'),
    body('tituloIncidente').notEmpty().withMessage('El campo título no puede estar vacío'),
    body('descripcionIncidente').notEmpty().withMessage('El campo descripcion no puede estar vacío'),
];