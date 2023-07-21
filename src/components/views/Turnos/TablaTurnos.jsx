import React from 'react';
import Table from 'react-bootstrap/Table';

function TablaTurnos() {
  return (
    <Table striped bordered size="sm" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Paciente</th>
          <th>Fecha</th>
          <th>Hora</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>14/06/2023</td>
          <td>16:30</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>14/06/2023</td>
          <td>15:30</td>
        </tr>        
      </tbody>
    </Table>
  );
}

export default TablaTurnos;