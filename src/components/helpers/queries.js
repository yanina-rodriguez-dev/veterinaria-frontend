const URL_paciente = import.meta.env.VITE_API_PACIENTE;

export const obtenerListaPaciente = async ()=>{
    try{
        const respuesta = await fetch(URL_paciente);
        const listaPacientes = await respuesta.json();
        return listaPacientes;
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
        return respuesta; // el status de la respuesta es 201
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

    export const obtenerPaciente = async (id)=>{
        try{
            const respuesta = await fetch(URL_paciente+'/'+id);
            const paciente = await respuesta.json();
            return paciente; 
        }catch(error){
            console.log(error);
        }
    }