import { TfiPencil, TfiTrash } from "react-icons/tfi";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarUsuario, obtenerListaUsuarios } from "../../helpers/queries";

const ItemUsuario = ({ usuario, setUsuarios }) => {
  const borrar = () => {
    Swal.fire({
      title: "¿Seguro que quiere borrar el siguiente usuario?",
      text: "El siguiente cambio no podra ser revertido",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4D91CD",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero borrar!",
      cancelButtonText: "Cancelar",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        borrarUsuario(usuario._id).then((respuesta) => {
          if (respuesta.status === 200) {
            obtenerListaUsuarios().then((respuesta) => {
              if (respuesta) {
                setUsuarios(respuesta);
              } else {
                Swal.fire(
                  "Error",
                  "Intente realizar esta operacion en unos minutos",
                  "error"
                );
              }
            });
            Swal.fire("Borrado!", "El usuario fue borrado.", "success");
          } else {
            Swal.fire({
              title: "Lo siento!",
              text: "El usuario no pudo ser eliminado.",
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
      <td>{usuario.esAdmin ? "ADMIN" : "CLIENTE"}</td>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
      <td>{usuario.telefono}</td>
      <td>{usuario.direccion}</td>
      <td>{usuario.dni}</td>
      <td className="text-center">
        <Link
          className="ms-3 p-2 mb-1 btn btn-primary"
          to={"editar-usuario/" + usuario._id}
        >
          <TfiPencil />
        </Link>
        <Button variant="danger" className="mx-3 p-2 mb-1" onClick={borrar}>
          <TfiTrash />
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
