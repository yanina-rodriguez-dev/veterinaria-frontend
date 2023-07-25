const URL_usuario = import.meta.env.VITE_API_USUARIOS;
// const URL_turno = import.meta.env.VITE_API_TURNOS;
const URL_paciente = import.meta.env.VITE_API_PACIENTES;

export const iniciarSesion = async (usuario) => {
    try {
      const respuesta = await fetch(URL_usuario);
      const listaUsuarios = await respuesta.json();
      const usuarioBuscado = listaUsuarios.find(
        (itemUsuario) => itemUsuario.email === usuario.email
      );
      if (usuarioBuscado) {
        if (usuarioBuscado.password === usuario.password) {
          return usuarioBuscado;
        } else {
        }
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };
    


export const obtenerListaPaciente = async ()=>{
    try{
        const respuesta = await fetch(URL_paciente);
        const listaPacientes = await respuesta.json();
        return listaPacientes;
    }catch(error){
        console.log(error);
    }
}
export const obtenerListaUsuarios = async ()=>{
    try{
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();
        return listaUsuarios;
    }catch(error){
        console.log(error);
    }
}



export const crearPaciente = async (paciente)=>{
    try{
        const respuesta = await fetch(URL_paciente,
            {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(paciente)
            });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}
export const crearUsuario = async (usuario)=>{
    try{
        const respuesta = await fetch(URL_usuario,
            {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(usuario)
            });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}


export const editarPaciente = async(paciente, id)=>{
    try{
        const respuesta = await fetch(URL_paciente+'/'+id,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(paciente)
        });
        return respuesta; 
    }catch(error){
        console.log(error)
    }
}

export const borrarPaciente = async(id)=>{
    try{
        const respuesta = await fetch(URL_paciente+'/'+id,{
            method: "DELETE"
        });
        return respuesta; 
    }catch(error){
        console.log(error)
    }
}
export const borrarUsuario = async(id)=>{
    try{
        const respuesta = await fetch(URL_usuario+'/'+id,{
            method: "DELETE"
        });
        return respuesta; 
    }catch(error){
        console.log(error)
    }
}

    export const obtenerPaciente = async (id)=>{
        try{
            const respuesta = await fetch(URL_paciente+'/'+id);
            const paciente = await respuesta.json();
            return paciente; 
        }catch(error){
            console.log(error);
        }
    }

