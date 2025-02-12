const {body} = require ('express-validator');


module.exports = [
    body('numeroSerie').notEmpty().withMessage('El campo numero de serie no puede estar vacío'),
    body('tipoEquipamiento').notEmpty().withMessage('El campo Tipo de equipamiento no puede estar vacío'),
    body('marca').notEmpty().withMessage('El campo marca no puede estar vacío'),
    body('modelo').notEmpty().withMessage('El campo modelo no puede estar vacío'),
    body('estado').notEmpty().withMessage('El campo estado no puede estar vacío'),
    body('dependencia').notEmpty().withMessage('El campo dependendencia no puede estar vacío')
];