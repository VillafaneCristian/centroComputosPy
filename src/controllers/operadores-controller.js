const operadoresService = require ('../services/operadores-service');
const areasService = require ('../services/areas-service');

module.exports = {

    alta: function(req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        areasService.obtenerAreasAlmacenadas()
            .then((listadoAreas)=>{
                res.render('operadores/operadoresAlta',
                    {
                    errors: errors ? errors : null,
                    oldData: oldData ? oldData : null,
                    listadoAreas: listadoAreas ? listadoAreas : null
                    }
                ); 
            })
            .catch((e)=>{
                console.log(e);
            })  
    },

    guardar: function(req,res) {
        operadoresService.guardarOperador(req.body);
        res.redirect('/operadores/listado');
    },

    listado: function(req,res){
        operadoresService.obtenerOperadoresAlmacenados()
            .then((listadoOperadores)=>{
                res.render('operadores/operadoresListado',{listadoOperadores:listadoOperadores});
            })
            .catch((e) => {
                console.log(e);
            }) 
    },
    modificarAvatar: function(req,res){
        res.render('operadores/operadoresModificacionAvatar'); 
    },

    salir: function(req,res){
        req.session.destroy();
        res.redirect('/login');
    },

    obtenerPorArea: function(req,res){
        operadoresService.obtenerPorArea(req.params.areaId)
            .then((listadoAreas)=>{
                res.json(listadoAreas);
            })
            .catch((e)=>{
                console.log(e);
            })

    }

}