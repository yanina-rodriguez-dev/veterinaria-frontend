import { TfiPencil, TfiTrash } from 'react-icons/tfi';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarTurno } from "../../helpers/queries"; // Asegúrate de tener esta función implementada en queries.js

const ItemTurno = ({ turno, setTurnos }) => {

  const handleBorrar = () => {
    Swal.fire({
      title: 'Seguro que quiere borrar el siguiente turno?',
      text: "El siguiente cambio no podrá ser revertido",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4D91CD',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, quiero borrar!',
      cancelButtonText: 'Cancelar'
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        borrarTurno(turno.id).then((respuesta) => {
          if (respuesta.status === 200) {
            // Vuelve a obtener la lista de turnos después de borrar
            obtenerListaTurnos().then((respuesta) => {
              if (respuesta) {
                setTurnos(respuesta);
              } else {
                Swal.fire("Error", "Intente realizar esta operación en unos minutos", "error");
              }
            });
            Swal.fire(
              "Borrado!",
              "El turno fue borrado.",
              "success"
            );
          } else {
            Swal.fire({
              title: "Lo siento!",
              text: "El turno no pudo ser eliminado.",
              icon: "error",
              confirmButtonColor: " #4D91CD",
            });
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{turno.id}</td>
      <td>{turno.nombreDueno}</td>
      <td>{turno.detalleCita}</td>
      <td>{turno.nombreVeterinario}</td>
      <td>{turno.nombreMascota}</td>
      <td>{turno.hora}</td>
      <td>{turno.fecha}</td>
      <td className='text-center'>
        <Link className="mx-3 p-2 px-2 mb-1 btn btn-primary" to={"/editar-turno/" + turno.id}><TfiPencil /></Link>
        <Button variant="danger mt-1" onClick={handleBorrar}><TfiTrash /></Button>
      </td>
    </tr>
  );
};

export default ItemTurno;
