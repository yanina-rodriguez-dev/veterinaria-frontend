import { TfiPencil, TfiTrash } from 'react-icons/tfi';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {borrarPaciente, obtenerListaPaciente} from "../../helpers/queries";



const ItemPaciente = ({paciente, setPacientes}) => {

    const borrar = () => {
Swal.fire({
    title: 'Seguro que quiere borrar el siguiente paciente?',
    text: "El siguiente cambio no podra ser revertido",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#4D91CD',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, quiero borrar!',
    cancelButtonText: 'Cancelar'
}).then((resultado) =>{
if (resultado.isConfirmed){
    borrarPaciente(paciente.id).then((respuesta) =>{
       if (respuesta.status === 200){
           obtenerListaPaciente().then((respuesta)=>{
            if (respuesta)
{
    setPacientes(respuesta);
} else{
    Swal.fire("Error", "Intente realizar esta operacion en unos minutos", "error");
}    
      })
      Swal.fire(
        "Borrado!",
        "El paciente fue borrado.",
        "success"
      )
      }else{
        Swal.fire({
            title: "Lo siento!",
            text: "El producto no pudo ser eliminado.",
            icon: "error",
            confirmButtonColor:" #4D91CD",
        });
      }
       })
    }
})
    }

    return (
    <tr>
        <td>{paciente.id}</td>
        <td>{paciente.nombreDueno}</td>
        <td>{paciente.email}</td>
        <td>{paciente.telefono}</td>
        <td>{paciente.direccion}</td>
        <td>{paciente.nombrePaciente}</td>
        <td>{paciente.especie}</td>
        <td>{paciente.raza}</td>
        <td className='text-center'>
            <Link className="mx-3 p-2 px-2 mb-1 btn btn-primary" to={"/administrador/editar-paciente/"+paciente.id}><TfiPencil /></Link>
        <Button variant="danger mt-1" onClick={borrar}><TfiTrash /></Button></td>
    </tr>

    );
};

export default ItemPaciente;