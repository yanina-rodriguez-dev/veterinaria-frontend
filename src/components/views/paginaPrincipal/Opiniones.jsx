import { Card, Col, Row } from "react-bootstrap";
import { FaUserCircle, FaStar, FaQuoteLeft } from "react-icons/fa";
import "./opiniones.css"

const Opiniones = () => {
    return (
        <div>
            <section>
            <Row className="mb-5">
        <Col xs={12} md={4}>
        <Card className="opinion">
          <Card.Body>
          <Card.Title className="mb-4 my-3 text-center"> <FaUserCircle className="fs-1 me-2"/>Juan Rodriguez </Card.Title>
          <Card.Title className="mb-2"> <FaQuoteLeft className="ms-3"/> </Card.Title>
          <Card.Text className="mx-5">También es genial que ofrezcan consejos útiles sobre cuidado y nutrición para los animales. ¡Sin duda recomendaría esta clínica veterinaria a todos mis amigos y familiares amantes de los animales!</Card.Text>
          </Card.Body>
          <div className="text-center text-warning mb-4 fs-4">
          <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
          </div>
        </Card>
        </Col>
        <Col xs={12} md={4}>
        <Card className="opinion">
          <Card.Body>
          <Card.Title className="mb-4 my-3 text-center"> <FaUserCircle className="fs-1 me-2"/>Juan Rodriguez </Card.Title>
          <Card.Title className="mb-2"> <FaQuoteLeft className="ms-3"/> </Card.Title>
          <Card.Text className="mx-5">También es genial que ofrezcan consejos útiles sobre cuidado y nutrición para los animales. ¡Sin duda recomendaría esta clínica veterinaria a todos mis amigos y familiares amantes de los animales!</Card.Text>
          </Card.Body>
          <div className="text-center text-warning mb-4 fs-4">
          <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
          </div>
        </Card>
        </Col>
        <Col xs={12} md={4}>
        <Card className="opinion">
          <Card.Body>
          <Card.Title className="mb-4 my-3 text-center"> <FaUserCircle className="fs-1 me-2"/>Juan Rodriguez </Card.Title>
          <Card.Title className="mb-2"> <FaQuoteLeft className="ms-3"/> </Card.Title>
          <Card.Text className="mx-5">También es genial que ofrezcan consejos útiles sobre cuidado y nutrición para los animales. ¡Sin duda recomendaría esta clínica veterinaria a todos mis amigos y familiares amantes de los animales!</Card.Text>
          </Card.Body>
          <div className="text-center text-warning mb-4 fs-4">
          <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
          </div>
        </Card>
        </Col>

      </Row>  
      </section>
        </div>
    );
};

export default Opiniones;