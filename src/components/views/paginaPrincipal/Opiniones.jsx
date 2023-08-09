import { Card, Col, Container, Row } from "react-bootstrap";
import { FaUserCircle, FaStar, FaQuoteLeft } from "react-icons/fa";
import "../../../css/opiniones.css"

const Opiniones = () => {
  return (
    <div>
      <Container>
        <Row className="my-5">
          <h2 className="fw-semibold my-5 titulos">Opiniones de nuestros clientes:<hr /></h2>
          
          <Col xs={12} md={4} className="mb-4">
            <Card className="opinion h-100">
              <Card.Body>
                <Card.Title className="mb-4 my-3 text-center">
                  {" "}
                  <FaUserCircle className="fs-1 me-2" />
                  Tamara Rodriguez{" "}
                </Card.Title>
                <Card.Title className="mb-2">
                  {" "}
                  <FaQuoteLeft className="ms-3" />{" "}
                </Card.Title>
                <Card.Text className="mx-lg-5 mx-md-1 mx-5">
                ¡Muchas gracias por haber salvado la vida de mi Tobi! La verdad es que no sé qué hubiera hecho sin ustedes. Desde el primer momento nos brindaron contención y nos sentimos acompañados en todo el proceso, desde la operación hasta su recuperación.
                </Card.Text>
              </Card.Body>
              <Card.Text className="text-center text-warning mb-4 fs-4">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </Card.Text>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Card className="opinion h-100">
              <Card.Body>
                <Card.Title className="mb-4 my-3 text-center">
                  {" "}
                  <FaUserCircle className="fs-1 me-2" />
                  Juan Gonzales{" "}
                </Card.Title>
                <Card.Title className="mb-2">
                  {" "}
                  <FaQuoteLeft className="ms-3" />{" "}
                </Card.Title>
                <Card.Text className="mx-lg-5 mx-md-1 mx-5">
                ¡Muchas gracias al Dr. Suárez por el excelente trato que tuvo con Flopi y mi familia, nuestra querida hija de cuatro patas. Nunca habíamos visto a Flopi llevarse tan bien con alguien que no fuera de la familia. Sin duda, recomiendo este centro lleno de profesionales capacitados.
                </Card.Text>
              </Card.Body>
              <Card.Text className="text-center text-warning mb-4 fs-4">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </Card.Text>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-xs-4">
            <Card className="opinion altura">
              <Card.Body>
                <Card.Title className="mb-3 my-3 text-center">
                  {" "}
                  <FaUserCircle className="fs-1 me-2" />
                  Juan Rodriguez{" "}
                </Card.Title>
                <Card.Title className="mb-2">
                  {" "}
                  <FaQuoteLeft className="ms-3" />{" "}
                </Card.Title>
                <Card.Text className="mx-lg-5 mx-md-1 mx-5">
                  También es genial que ofrezcan consejos útiles sobre cuidado y
                  nutrición para los animales, ademas de eso no tengo nada mas para agregar. ¡Sin duda recomendaría esta
                  clínica veterinaria a todos mis amigos, conocidos y familiares amantes de
                  los animales! Simplemente Gracias!
                </Card.Text>
              </Card.Body>
              <Card.Text className="text-center text-warning mb-4 fs-4">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Opiniones;
