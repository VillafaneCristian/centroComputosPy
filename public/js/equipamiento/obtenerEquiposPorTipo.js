document.getElementById('tipoEquipo').addEventListener('change',function(){
    const tipoEquipo = this.value;
    const numeroSerieSelect = document.getElementById('numeroSerie');

    numeroSerieSelect.innerHTML = '<option value="sin-especificar">Sin especificar</option>'

    if (tipoEquipo){
        fetch(`/equipamiento/obtenerPorTipo/${tipoEquipo}`)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                const codigoDependencia = document.getElementById('dependencia').value;
                data.forEach((unEquipo)=>{
                    
                    if (codigoDependencia && (unEquipo.codigoDependenciaId == codigoDependencia)){
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