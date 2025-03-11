const {body} = require ('express-validator');

module.exports = [
    body('dependencia').notEmpty().withMessage('El campo dependencia no puede estar vacìo'),
    body('usuario').notEmpty().withMessage('El campo usuario no puede estar vacìo'),
    body('tipoEquipo').notEmpty().withMessage('El campo tipo de equipamiento no puede estar vacío'),
    body('numeroSerie').notEmpty().withMessage('El campo numero de serie no puede estar vacío')
];