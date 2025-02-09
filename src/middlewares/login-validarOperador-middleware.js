const bcryptjs = require ('bcryptjs');
const operadoresService = require ('../services/operadores-service');

module.exports = (req,res,next) => {

    operadoresService.obtenerOperadorPorCuil(req.body.cuil)
        .then((operadorEncontrado) => {
            if (!operadorEncontrado) {
                req.session.errors = {
                    cuil:{
                        msg: 'usuario incorrecto'
                    }
                };
                req.session.oldData = {
                    cuil: req.body.cuil
                };
                return res.redirect('/login');
            }else{
                const validarContrasenia = bcryptjs.compareSync(req.body.contrasenia,operadorEncontrado.contrasenia); 

                if(!validarContrasenia){
                    req.session.errors = {
                        contrasenia: {
                            msg: 'Password incorrecto'
                        }
                    };
                    req.session.oldData = {
                        cuil: req.body.cuil
                    };
                    return res.redirect('/login');
                }else{
                    delete operadorEncontrado.contrasenia;
                    req.session.operadorLogueado = operadorEncontrado;
                    next();
                }
            }
        })
        .catch((e)=>{
            console.log(e);
        });
};

