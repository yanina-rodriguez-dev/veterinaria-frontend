import TablaGestionTurnos from './Turnos/TablaGestionTurnos';
import React from 'react';
import ColumnaIzquierda from './Turnos/Columna';
import '../../css/Administrador.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
          <Link to={"crear-turno"} className="btn btn-success" >Nuevo Turno</Link>
          <TablaGestionTurnos />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default AdmTurnos;
