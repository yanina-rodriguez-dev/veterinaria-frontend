import { TfiPencil } from 'react-icons/tfi';
import { Link } from "react-router-dom";

const ItemTurno = ({ turno }) => {
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
        <Link className="mx-3 p-2 px-2 mb-1 btn btn-primary" to={"editar-turno/" + turno.id}><TfiPencil /></Link>
      </td>
    </tr>
  );
};

export default ItemTurno;
