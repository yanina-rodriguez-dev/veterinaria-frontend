import React from 'react';
import { useEffect, useState } from "react";
import { Button, Table } from 'react-bootstrap';
import { obtenerListaPaciente } from '../../helpers/queries';
import ItemPaciente from './ItemPaciente';

function TablaGestionPacientes() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(()=>{
    obtenerListaPaciente().then((respuesta)=>{
      if(respuesta){
        setPacientes(respuesta);
      }else{
        Swal.fire('Error', 'Intente realizar esta operación en unos minutos', 'error');
      }
    })
  },[])

  return (
    <Table striped bordered size="sm" responsive className='text-center'>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
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
        {
          pacientes.map((paciente)=> <ItemPaciente key={paciente.id} paciente={paciente}></ItemPaciente>)
        }
      </tbody>
    </Table>
  );
}

export default TablaGestionPacientes;