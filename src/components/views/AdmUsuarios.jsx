import ColumnaIzquierda from "./Turnos/ColumnaIzquierda";
import "../../css/administrador.css";
import { Col, Container, Row } from "react-bootstrap";
import TablaGestionUsuarios from "./Usuarios/TablaGestionUsuarios";
import { Link } from "react-router-dom";

const AdmUsuarios = () => {
  return (
    <>
      <Container fluid className="text-center">
        <Row className="text-center pt-3">
          <Col xs={3} className="d-none d-sm-block">
            <ColumnaIzquierda></ColumnaIzquierda>
          </Col>
          <Col xs={12} sm={9}>
            <div>
              <h2 className="fw-semibold titulos">Administrar Usuarios:</h2>
              <hr />
              <p>Gestiona los Usuarios:</p>
              <Link to={"/registro"} className="btn btn-lg btn-success">
                Nuevo Usuario
              </Link>
            </div>
            <TablaGestionUsuarios />
            <Link
              relative
              to="../"
              className="btn btn-success text-decoration-none text-light my-2 d-sm-none"
            >
              Volver a administrador
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdmUsuarios;
