import React from 'react';
import TablaTurnos from './Turnos/TablaTurnos';
import ColumnaIzquierda from './Turnos/Columna';
import '../../App.css';
import { Col, Container, Row } from 'react-bootstrap';

const Administrador = () => {
  return (
    <>
    <Container fluid className='text-center'>
      <Row className='text-center'>
      <Col xs={3} className="d-none d-sm-block">
          <ColumnaIzquierda></ColumnaIzquierda>
        </Col>
        <Col xs={12} md={9}>
          <div>
            <h2>Bienvenido!</h2>
            <hr />
            <p>Estos son los turnos reservados de los próximos días: </p>
          </div>
          <TablaTurnos />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Administrador;