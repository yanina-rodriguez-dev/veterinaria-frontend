import React from 'react';
import { TfiPencil, TfiTrash } from 'react-icons/tfi';
import { Button, Table } from 'react-bootstrap';

function TablaGestionTurnos() {
  return (
    <Table striped bordered size="sm" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Detalle de cita</th>
          <th>Veterinario</th>
          <th>Mascota</th>
          <th>Hora</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>detalle cita 1</td>
          <td>Lionel Messi</td>
          <td>Toby</td>
          <td>16:30</td>
          <td>14/06/2023</td>
          <td className='text-center'><Button className='mx-3'><TfiPencil /></Button><Button><TfiTrash /></Button></td>
        </tr>
        <tr>
        <td>2</td>
          <td>Mark</td>
          <td>detalle cita 1</td>
          <td>Lionel Messi</td>
          <td>Toby</td>
          <td>16:30</td>
          <td>14/06/2023</td>
          <td className='text-center'><Button className='mx-3'><TfiPencil /></Button><Button><TfiTrash /></Button></td>
        </tr>
        <tr>
        <td>3</td>
          <td>Mark</td>
          <td>detalle cita 1</td>
          <td>Lionel Messi</td>
          <td>Toby</td>
          <td>16:30</td>
          <td>14/06/2023</td>
          <td className='text-center'><Button className='mx-3'><TfiPencil /></Button><Button><TfiTrash /></Button></td>
        </tr>
        <tr>
        <td>4</td>
          <td>Mark</td>
          <td>detalle cita 1</td>
          <td>Lionel Messi</td>
          <td>Toby</td>
          <td>16:30</td>
          <td>14/06/2023</td>
          <td className='text-center'><Button className='mx-3'><TfiPencil /></Button><Button><TfiTrash /></Button></td>
        </tr>
        <tr>
        <td>5</td>
          <td>Mark</td>
          <td>detalle cita 1</td>
          <td>Lionel Messi</td>
          <td>Toby</td>
          <td>16:30</td>
          <td>14/06/2023</td>
          <td className='text-center'><Button className='mx-3'><TfiPencil /></Button><Button><TfiTrash /></Button></td>
        </tr>        
      </tbody>
    </Table>
  );
}

export default TablaGestionTurnos;