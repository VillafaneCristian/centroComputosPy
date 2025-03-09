
document.getElementById('dependencia').addEventListener('change',function(){
    const dependenciaId = this.value;  
    const usuarioSelect = document.getElementById('usuario'); 
    
    
    usuarioSelect.innerHTML = '<option value="1">Sin especificar </option>';

    if(dependenciaId){
        fetch(`/usuarios/obtenerPorDependencia/${dependenciaId}`)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                data.forEach((unUsuario)=>{
                    const option = document.createElement('option');
                    option.value = unUsuario.cuilUsuarioId;
                    option.textContent = unUsuario.nombre + ' ' + unUsuario.apellido;
                    usuarioSelect.appendChild(option);
                });
            })
            .catch((e)=>{
                console.log(e)
            })
    }
});



