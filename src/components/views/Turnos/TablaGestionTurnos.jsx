import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import { obtenerListaTurnos } from '../../helpers/queries';
import ItemTurno from './ItemTurno';

function TablaGestionTurnos() {
  const pageSize = 4;
  const [turnos, setTurnos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    obtenerListaTurnos(currentPage, pageSize).then((respuesta) => {
      if (respuesta) {
        setTurnos(respuesta);
      } else {
        Swal.fire('Error', 'Intente realizar esta operación en unos minutos', 'error');
      }
    });
  }, [currentPage]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const turnosPaginados = turnos.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h2 className="display-6 titulos">Turnos</h2>
      </div>
      <Table striped bordered size="sm" responsive className='text-center'>
        <thead>
          <tr>
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
          {turnosPaginados.map((turno) => <ItemTurno key={turno._id} turno={turno} setTurnos={setTurnos}></ItemTurno>)}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: Math.ceil(turnos.length / pageSize) }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= turnos.length}
        />
        <Pagination.Last onClick={() => handlePageChange(Math.ceil(turnos.length / pageSize))} />
      </Pagination>
    </section>
  );
}

export default TablaGestionTurnos;
