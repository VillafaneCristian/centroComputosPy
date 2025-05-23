const areasService = require ('../services/areas-service');
const edificiosService = require ('../services/edificios-service');

module.exports = {

    alta: function (req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;
        edificiosService.obtenerEdificiosAlmacenados()
            .then((listadoEdificios) => {
                console.log(oldData);
                res.render('areas/areasAlta',
                    {errors: errors ? errors : '',
                     oldData: oldData ? oldData : '',
                     listadoEdificios: listadoEdificios ? listadoEdificios : ''   
                    });
            })
            .catch((e) => {
                console.log(e);
            });
    },

    guardar: function (req,res){
        areasService.guardarArea(req.body);
        res.redirect('/areas/listado');
    }, 
    
    listado: function(req,res){
        areasService.obtenerAreasAlmacenadas()
            .then((listadoAreas) => {
                res.render('areas/areasListado', {listadoAreas: listadoAreas});
            })
            .catch((e)=>{
                console.log(e);
            });
    },

    ver: function(req,res){
        const codigoArea = req.params.codigoArea;
        areasService.obtenerAreaPorCodigo(codigoArea)
            .then((areaEncontrada)=>{
                res.render('areas/areasVer',{areaEncontrada: areaEncontrada});
            })
            .catch((e)=>{
                console.log(e);
            });
    },

    editar: function(req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null; 
        const obtenerArea = areasService.obtenerAreaPorCodigo(req.params.codigoArea);
        const obtenerEdificios = edificiosService.obtenerEdificiosAlmacenados();

        Promise.all([obtenerArea,obtenerEdificios])
            .then(([areaEncontrada,listadoEdificios])=>{
                res.render('areas/areasModificacion.ejs',{
                    errors: errors ? errors : '',
                    oldData: oldData ? oldData : '',
                    areaEncontrada: areaEncontrada ? areaEncontrada : '',
                    listadoEdificios: listadoEdificios ? listadoEdificios : []
                }); 
            })           
            .catch((e)=>{
                console.log(e);
            }) 
    },

    procesarEditar: function(req,res){
        areasService.actualizarDatosArea(req.body)
            .then((filaActualizada)=>{
                res.redirect('/areas/listado'); 
            })
            .catch((e)=>{
                console.log(e);
            });
    },

    eliminar: function(req,res){
        areasService.eliminarArea(req.params.codigoArea)
        .then((areaEliminada)=>{
            console.log(areaEliminada);
            res.redirect('/areas/listado'); 
        })
        .catch((e)=>{
            console.log(e);
        })
    }
};