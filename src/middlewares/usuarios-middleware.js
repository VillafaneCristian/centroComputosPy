const {validationResult} = require ('express-validator');

module.exports = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        req.session.errors = errors.mapped();
        req.session.oldData = req.body;
        res.redirect('/usuarios/alta');
    }else{
        next();
    }
};