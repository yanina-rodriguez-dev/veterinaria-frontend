import React from "react";
import ColumnaIzquierda from "./Turnos/ColumnaIzquierda";
import "../../css/Administrador.css";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import TablaGestionUsuarios from "./Usuarios/TablaGestionUsuarios";
import { Link } from "react-router-dom";

const AdmUsuarios = () => {
  return (
    <>
      <Container fluid className="text-center">
        <Row className="text-center">
          <Col xs={3} className="d-none d-sm-block">
            <ColumnaIzquierda></ColumnaIzquierda>
          </Col>
          <Col xs={12} md={9}>
            <div>
              <h2>Administrar Usuarios:</h2>
              <hr />
              <p>Gestiona los Usuarios:</p>
              <Link to={"/registro"} className="btn btn-lg btn-success">
                Nuevo Usuario
              </Link>
            </div>
              <hr />
              <p>Gestiona los Usuarios:</p>
              <Link to={"/registro"} className="btn btn-success">
                Nuevo Usuario
              </Link>
            </div>
            <TablaGestionUsuarios />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdmUsuarios;
