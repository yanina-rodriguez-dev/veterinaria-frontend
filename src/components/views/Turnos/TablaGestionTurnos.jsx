import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { obtenerListaTurnos } from '../../helpers/queries'; // Asegúrate de tener esta función implementada en queries.js
import ItemTurno from './ItemTurno';

function TablaGestionTurnos() {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    obtenerListaTurnos().then((respuesta) => {
      if (respuesta) {
        setTurnos(respuesta);
      } else {
        Swal.fire('Error', 'Intente realizar esta operación en unos minutos', 'error');
      }
    });
  }, []);

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Turnos</h1>
        {/* <Link className="btn btn-primary" to='/admTurnos/crear-turno'>
            Agregar
        </Link> */}
      </div>
      <Table striped bordered size="sm" responsive className='text-center'>
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
          {turnos.map((turno) => <ItemTurno key={turno.id} turno={turno} setTurnos={setTurnos}></ItemTurno>)}
        </tbody>
      </Table>
    </section>
  );
}

export default TablaGestionTurnos;