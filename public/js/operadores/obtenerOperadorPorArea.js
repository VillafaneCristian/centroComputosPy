document.getElementById('areaAsignada').addEventListener('change',function(){
    const areaId = this.value;
    const operadorSelect = document.getElementById('operador'); 

    operadorSelect.innerHTML = '<option value="1">Sin especificar</option>';

    if(areaId){
        fetch(`/operadores/obtenerPorArea/${areaId}`)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                data.forEach((unOperador)=>{
                    const option = document.createElement('option');
                    option.value = unOperador.cuilOperadorId;
                    option.textContent = unOperador.nombre + ' ' + unOperador.apellido;
                    operadorSelect.appendChild(option);
                });
            })
            .catch((e)=>{
                console.log(e);
            })

    }

});