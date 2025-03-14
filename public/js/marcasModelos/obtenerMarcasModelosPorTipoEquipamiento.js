const selectTipoEquipo = document.getElementById('tipoEquipo');

selectTipoEquipo.addEventListener('change',function(){
    const tipoEquipoSeleccionado = this.value; 

    document.getElementById('marcasModelos').innerHTML= '<option value="">Seleccione una Marca y Modelo</option>'
    
    if (tipoEquipoSeleccionado){
        fetch(`/marcasModelos/obtenerPorTipoEquipo/${tipoEquipoSeleccionado}`)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                data.forEach((unaMarcaModelo) => {
                    const option = document.createElement('option'); 
                    option.value = unaMarcaModelo.marcasModelosId; 
                    option.textContent = unaMarcaModelo.marcaModelo;
                    
                    document.getElementById('marcasModelos').appendChild(option); 
                    
                });
            })
            .catch((e)=>{
                console.log(e)
            })
    }
});

