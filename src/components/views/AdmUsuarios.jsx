import React from 'react';
import ColumnaIzquierda from './Turnos/Columna';
import '../../css/Administrador.css';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import TablaGestionUsuarios from './Usuarios/TablaGestionUsuarios';

const AdmUsuarios = () => {
  return (
    <>
    <Container fluid className='text-center'>
      <Row className='text-center'>
      <Col xs={3} className="d-none d-sm-block">
          <ColumnaIzquierda></ColumnaIzquierda>
        </Col>
        <Col xs={12} md={9}>
          <div>
            <h2>Administrar Usuarios:</h2>
            <hr />
            <p>Gestiona los Usuarios:</p>
          </div>
          
          <TablaGestionUsuarios />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default AdmUsuarios;