module.exports = (req,res,next) => {
    if (!req.session.operadorLogueado){
        res.redirect ('/login');
    }else{
        next();
    }
}