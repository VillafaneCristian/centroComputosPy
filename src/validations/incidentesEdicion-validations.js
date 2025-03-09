const {body} = require ('express-validator');

module.exports = [
    body('clasificacionIncidente').notEmpty().withMessage('El campo clasificacion no puede estar vacío'), 
    body('areaAsignada').notEmpty().withMessage('El campo area no puede estar vacío'),
    body('operador').notEmpty().withMessage('El campo operador no puede estar vacío')
];