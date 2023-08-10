import { TfiPencil, TfiTrash } from 'react-icons/tfi';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarPaciente, obtenerListaPacientes } from '../../helpers/queries';

const itemPaciente = ({paciente, setPacientes}) => {

    const borrar = () => {
        Swal.fire({
            title: '¿Seguro que quiere borrar el siguiente usuario?',
            text: "El siguiente cambio no podra ser revertido",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4D91CD',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero borrar!',
            cancelButtonText: 'Cancelar'
        }).then((resultado) =>{
        if (resultado.isConfirmed){
            borrarPaciente(paciente._id).then((respuesta) =>{
               if (respuesta.status === 200){
                   obtenerListaPacientes().then((respuesta)=>{
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
                    text: "El paciente no pudo ser eliminado.",
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
        <td>{paciente.nombreDueno}</td>
        <td>{paciente.email}</td>
        <td>{paciente.telefono}</td>
        <td>{paciente.direccion}</td>
        <td>{paciente.nombrePaciente}</td>
        <td>{paciente.especie}</td>
        <td>{paciente.raza}</td>
        <td className='text-center'>
            <Link className="mx-3 p-2 px-2 mb-1 btn btn-primary" to={"editar-paciente/"+paciente._id}><TfiPencil /></Link>
        <Button variant="danger mt-1" onClick={borrar}><TfiTrash /></Button>
        </td>
    </tr>
        );
};

export default itemPaciente;