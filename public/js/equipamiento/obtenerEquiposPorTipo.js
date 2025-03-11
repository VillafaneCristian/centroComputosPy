document.getElementById('tipoEquipo').addEventListener('change',function(){
    const tipoEquipo = this.value;
    const numeroSerieSelect = document.getElementById('numeroSerie');

    numeroSerieSelect.innerHTML = '<option value="sin_especificar">Sin especificar</option>'

    if (tipoEquipo){
        fetch(`/equipamiento/obtenerPorTipo/${tipoEquipo}`)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                data.forEach((unEquipo)=>{

                    const codigoDependencia = document.getElementById('dependencia').value;
                    
                    if (codigoDependencia && codigoDependencia == unEquipo.codigoDependenciaId){
                        const option = document.createElement('option');
                        option.value = unEquipo.nroSerieId;
                        option.textContent = unEquipo.nroSerieId;
                        numeroSerieSelect.appendChild(option);
                    }                  
                });
            })
            .catch((e)=>{
                console.log(e);
            });
    }
});