import { TfiPencil, TfiTrash } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { obtenerListaTurnos, borrarTurno } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemTurno = ({ turno, setTurnos }) => {
  const eliminarTurno = () => {
    Swal.fire({
      title: "Seguro que quiere borrar el turno?",
      text: "El siguiente cambio no podra ser revertido",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4D91CD",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero borrar!",
      cancelButtonText: "Cancelar",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        borrarTurno(turno._id).then((respuesta) => {
          if (respuesta.status === 200) {
            obtenerListaTurnos().then((respuesta) => {
              if (respuesta) {
                setTurnos(respuesta);
              } else {
                Swal.fire(
                  "Error",
                  "Intente realizar esta operacion en unos minutos",
                  "error"
                );
              }
            });
            Swal.fire(
              "Borrado!",
              "El turno fue eliminado correctamente.",
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
      <td>{turno.nombreDueno}</td>
      <td>{turno.detalleCita}</td>
      <td>{turno.nombreVeterinario}</td>
      <td>{turno.nombreMascota}</td>
      <td>{turno.hora}</td>
      <td>{turno.fecha}</td>
      <td className="text-center">
        <Link
          className="mx-3 p-2 px-2 mb-1 btn btn-primary"
          to={"editar-turno/" + turno._id}
        >
          <TfiPencil />
        </Link>
        <Button variant="danger mt-1" onClick={eliminarTurno}>
          <TfiTrash />
        </Button>
      </td>
    </tr>
  );
};

export default ItemTurno;
