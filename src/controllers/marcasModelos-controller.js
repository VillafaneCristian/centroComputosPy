const marcasMoedlosService = require ('../services/marcasModelos-service');

module.exports = {

    obtenerPorTipoEquipo: function(req,res){

        marcasMoedlosService.obtenerPorTipoEquipo(req.params.tipoEquipoId)
            .then((listadoMarcasModelos)=>{
                res.json(listadoMarcasModelos);
            })
            .catch((e)=>{
                console.log(e)
            })
    }

}