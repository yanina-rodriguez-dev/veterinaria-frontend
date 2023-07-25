import React from 'react';
import TablaGestionPacientes from './Pacientes/TablaGestionPacientes';
import ColumnaIzquierda from './Turnos/Columna';
import '../../css/Administrador.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdmPacientes = () => {
  return (
    <>
    <Container fluid className='text-center'>
      <Row className='text-center'>
      <Col xs={3} className="d-none d-sm-block">
          <ColumnaIzquierda></ColumnaIzquierda>
        </Col>
        <Col xs={12} md={9}>
          <div>
            <h2>Administrar Pacientes:</h2>
            <hr />
            <p>Gestiona los pacientes:</p>
            <Link to={"/administrador/admpacientes/crear-paciente"} className="btn btn-success" >Nuevo Paciente</Link>
          </div>
          
          <TablaGestionPacientes />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default AdmPacientes;