import { TfiPencil, TfiTrash } from 'react-icons/tfi';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


const ItemPaciente = ({paciente}) => {
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
        <Button variant="danger mt-1"><TfiTrash /></Button></td>
    </tr>

    );
};

export default ItemPaciente;