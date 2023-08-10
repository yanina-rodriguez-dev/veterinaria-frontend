import TablaTurnos from "./Turnos/TablaTurnos";
import ColumnaIzquierda from "./Turnos/ColumnaIzquierda";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";




const Administrador = () => {
  const usuariosSession = JSON.parse(sessionStorage.getItem("usuario"));
  return (
    <>

      <Container fluid className="text-center">
        <Row className="text-center pt-3">
          <Col xs={3} className="d-none d-md-block">
            <ColumnaIzquierda></ColumnaIzquierda>
          </Col>
          <Col xs={12} md={9}>
            <div>
              <h2 className="fw-semibold titulos">
                Bienvenido{" "}
                {usuariosSession ? usuariosSession.nombreUsuario : ""}!
              </h2>
              <hr />
              <div className="d-md-none my-2">
                <h3>Gestionar:</h3>
                <Link
                  to="admpacientes/"
                  className="btn btn-primary text-decoration-none text-light"
                >
                  Pacientes
                </Link>
                <Link
                  to="admturnos/"

                  className="btn btn-primary text-decoration-none text-light mx-2 my-2"
                >
                  Turnos
                </Link>
                <Link
                  to="admusuarios/"

                  className="btn btn-primary text-decoration-none text-light"
                >
                  Usuarios
                </Link>
              </div>
            </div>
            <p>Estos son los turnos reservados de los próximos días:</p>
            <TablaTurnos />
            
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Administrador;
