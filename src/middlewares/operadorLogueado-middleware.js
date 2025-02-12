module.exports = (req,res,next)=>{
    if(!req.session.operadorLogueado){
        next()
    }else{
        res.redirect('/incidentes/listado');
    }
}