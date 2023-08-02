import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { obtenerListaTurnos } from '../../helpers/queries';

function TablaTurnos() {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    obtenerListaTurnos().then((respuesta) => {
      if (respuesta) {
        setTurnos(respuesta);
      } else {
        console.log('Error al obtener la lista de turnos');
      }
    });
  }, []);

  return (
    <Table striped bordered size="sm" responsive>
      <thead>
        <tr>
          <th>Paciente</th>
          <th>Fecha</th>
          <th>Hora</th>
        </tr>
      </thead>
      <tbody>
        {turnos.map((turno) => (
          <tr key={turno._id}>
            <td>{turno.nombreDueno}</td>
            <td>{turno.fecha}</td>
            <td>{turno.hora}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablaTurnos;
