import TablaGestionTurnos from './Turnos/TablaGestionTurnos';
import React from 'react';
import ColumnaIzquierda from './Turnos/Columna';
import '../../css/Administrador.css';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';

const AdmTurnos = () => {
  return (
    <>
    <Container fluid className='text-center'>
      <Row className='text-center'>
      <Col xs={3} className="d-none d-sm-block">
          <ColumnaIzquierda></ColumnaIzquierda>
        </Col>
        <Col xs={12} md={9}>
          <div>
            <h2>Administrar Turnos:</h2>
            <hr />
            <p>Gestiona los turnos:</p>
          </div>
          <Button variant="dark" className='m-2' href='/crear-turno/:id'>Nuevo Turno</Button>
          <TablaGestionTurnos />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default AdmTurnos;
