import React from 'react';
import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
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
    <section>
      <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Pacientes</h1>
          {/* <Link className="btn btn-primary" to='/admPacientes/crear-paciente'>
            Agregar
          </Link> */}
        </div>
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
    </section>
  );
}

export default TablaGestionPacientes;