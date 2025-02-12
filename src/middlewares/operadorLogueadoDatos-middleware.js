module.exports = (req,res,next)=>{
    if (req.session.operadorLogueado) {
        res.locals.operadorLogueado = req.session.operadorLogueado;
        console.log(res.locals.operadorLogueado);
    };
    next();
}

