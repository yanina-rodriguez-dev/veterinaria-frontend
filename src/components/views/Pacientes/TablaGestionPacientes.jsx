import React from 'react';
import { TfiPencil, TfiTrash } from 'react-icons/tfi';
import { Button, Table } from 'react-bootstrap';

function TablaGestionPacientes() {
  return (
    <Table striped bordered size="sm" responsive className='text-center'>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Direccion</th>
          <th>Nombre Mascota</th>
          <th>Especie</th>
          <th>Raza</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Angel</td>
          <td>Di Maria</td>
          <td>segundoFrancia@hotmail.com</td>
          <td>381123123</td>
          <td>Rosario, Santa Fe, Argentina</td>
          <td>Toby</td>
          <td>Perro</td>
          <td>Labrador</td>
          <td className='text-center'><Button className='mx-3'><TfiPencil /></Button><Button><TfiTrash /></Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Angel</td>
          <td>Di Maria</td>
          <td>segundoFrancia@hotmail.com</td>
          <td>381123123</td>
          <td>Rosario, Santa Fe, Argentina</td>
          <td>Toby</td>
          <td>Perro</td>
          <td>Labrador</td>
          <td className='text-center'><Button className='mx-3'><TfiPencil /></Button><Button><TfiTrash /></Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Angel</td>
          <td>Di Maria</td>
          <td>segundoFrancia@hotmail.com</td>
          <td>381123123</td>
          <td>Rosario, Santa Fe, Argentina</td>
          <td>Toby</td>
          <td>Perro</td>
          <td>Labrador</td>
          <td className='text-center'><Button className='mx-3'><TfiPencil /></Button><Button><TfiTrash /></Button></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Angel</td>
          <td>Di Maria</td>
          <td>segundoFrancia@hotmail.com</td>
          <td>381123123</td>
          <td>Rosario, Santa Fe, Argentina</td>
          <td>Toby</td>
          <td>Perro</td>
          <td>Labrador</td>
          <td className='text-center'><Button className='mx-3'><TfiPencil /></Button><Button><TfiTrash /></Button></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Angel</td>
          <td>Di Maria</td>
          <td>segundoFrancia@hotmail.com</td>
          <td>381123123</td>
          <td>Rosario, Santa Fe, Argentina</td>
          <td>Toby</td>
          <td>Perro</td>
          <td>Labrador</td>
          <td className='text-center'><Button className='mx-3'><TfiPencil /></Button><Button><TfiTrash /></Button></td>
        </tr>      
      </tbody>
    </Table>
  );
}

export default TablaGestionPacientes;