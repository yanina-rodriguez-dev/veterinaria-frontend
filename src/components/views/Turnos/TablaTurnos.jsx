import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { obtenerListaTurnos } from '../../helpers/queries';

function TablaTurnos() {
  const pageSize = 5;
  const [turnos, setTurnos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    obtenerListaTurnos().then((respuesta) => {
      if (respuesta) {
        setTurnos(respuesta);
      } else {
        console.log('Error al obtener la lista de turnos');
      }
    });
  }, []);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const turnosPaginados = turnos.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Table striped bordered size="sm" responsive>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Fecha</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {turnosPaginados.map((turno) => (
            <tr key={turno._id}>
              <td>{turno.nombreDueno}</td>
              <td>{turno.fecha}</td>
              <td>{turno.hora}</td>
            </tr>
          ))}
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
    </div>
  );
}

export default TablaTurnos;