import { TfiPencil, TfiTrash } from 'react-icons/tfi';
import { Button, Table } from 'react-bootstrap';

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
        <td className='text-center'><Button className='mx-3'><TfiPencil /></Button><Button><TfiTrash /></Button></td>
    </tr>

    );
};

export default ItemPaciente;