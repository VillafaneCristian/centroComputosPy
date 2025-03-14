const selectMarcasModelos = document.getElementById('marcasModelos');

selectMarcasModelos.addEventListener('change',function(){
    const marcaModeloId = this.value;

    document.getElementById('numeroSerie').innerHTML='<option value="">Seleccione un numero de serie</option>'

    if(marcaModeloId){
        fetch(`/equipamiento/obtenerPorMarcaModelo/${marcaModeloId}`)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                data.forEach((unEquipo) => {

                    console.log('valor que viene del listado del fectch ' + unEquipo.codigoDependenciaId + 'Y es de tipo: ' + typeof(unEquipo.codigoDependenciaId));
                    console.log('valor que capturo del select dependencia ' + document.getElementById('dependencia').value + 'Y es de tipo: ' + typeof(document.getElementById('dependencia').value));


                    if (document.getElementById('dependencia').value == unEquipo.codigoDependenciaId ){
                        console.log('Entreeeeeeeeeeeeee');
                        const option = document.createElement('option'); 
                        option.value = unEquipo.nroSerieId; 
                        option.textContent = unEquipo.nroSerieId;
                        document.getElementById('numeroSerie').appendChild(option); 
                    }
                    
                });
            })
            .catch((e)=>{
                console.log(e)
            })
    }


})