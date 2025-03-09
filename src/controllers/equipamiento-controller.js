const equipamientoService = require ('../services/equipamiento-service');
const dependenciasService = require ('../services/dependencias-service');
const usuariosService = require ('../services/usuarios-service');
const aclsService = require ('../services/acls-service');
const tiposEquipamientoService = require ('../services/tiposEquipamiento-service');

module.exports = {

    alta: function (req,res){
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null;
        req.session.oldData = null;

        const obtenerDependenciasAlmacenadas = dependenciasService.obtenerDependenciasAlmacenadas();
        const obtenerUsuariosAlmacenados = usuariosService.obtenerUsuariosAlmacenados();
        const obtenerAclsAlmacenados = aclsService.obtenerAclsAlmacenados();
        const obtenerTiposEquipamiento = tiposEquipamientoService.obtenerTiposEquipamientoAlmacenados();

        Promise.all([obtenerDependenciasAlmacenadas,obtenerUsuariosAlmacenados,obtenerAclsAlmacenados, obtenerTiposEquipamiento])
            .then(([listadoDependencias, listadoUsuarios, listadoAcls, listadoTiposEquipamiento]) => {
                res.render('equipamiento/equipamientoAlta',{
                    errors: errors ? errors : '',
                    oldData: oldData ? oldData : '',
                    listadoDependencias: listadoDependencias ? listadoDependencias : '',
                    listadoUsuarios: listadoUsuarios ?  listadoUsuarios : '',
                    listadoAcls: listadoAcls ? listadoAcls : '',
                    listadoTiposEquipamiento: listadoTiposEquipamiento ? listadoTiposEquipamiento : ''
                });

            })
            .catch((e)=>{
                console.log(e);
            });

        
    },

    guardar: function (req,res){
        equipamientoService.guardarEquipamiento(req.body)
            .then((unEquipamiento) => {
                console.log(`Se dió de alta el equipamiento con el numero de serie: ${unEquipamiento.nroSerieId}`);
                res.redirect('/incidentes/listado');
            })
            .catch((e)=>{
                console.log(e);
            });
    },

    obtenerPorTipo: function(req,res){ 
        equipamientoService.obtenerPorTipo(req.params.tipoEquipo)
            .then((listadoEquipos)=>{
                res.json(listadoEquipos); 
            })
            .catch((e)=>{
                console.log(e)
            })
        
    }
}