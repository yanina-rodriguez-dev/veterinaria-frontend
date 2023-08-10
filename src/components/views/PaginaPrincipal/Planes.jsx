import { Card, Col, Row, Container } from "react-bootstrap";
import { FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";

const Planes = () => {
  return (
    <section>
      <div className="banner-Planes pb-2">
        <img
          className="img-fluid rounded-3"
          src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80tos/xulIYVIbYIc"
          alt="gatito-chocando-patitas"
        />
        <div className="p-4 my-4">
          <div className="p-4 text-dark container cajaPlanes text-center mt-1">
            <h2 className=" text-dark fw-bold titulos f-title fs-1">
              Planes de salud para mascotas
            </h2>
            <br />
            <h3 className="f-text fs-2 mb-2">
              Te ayudamos a mantener a tu mascota feliz y saludable
            </h3>
            <br />
            <p className="f-text fs-4 mb-2 p-2">
              Creados específicamente para perros y gatos, nuestros planes de
              salud Cuidado Completo son la forma más rentable de mantener a las
              mascotas protegidas durante todo el año.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Container fluid className="mb-5 titulos">
          <div className="py-2">
            <Row xs={1} md={3} lg={3} className="g-4">
              <Col>
                <Card className="box p-2 m-3 h-100">
                  <Card.Img
                    variant="top"
                    className="img-fluid img-thumbnail rounded-3"
                    src="https://images.unsplash.com/photo-1616493039661-8a63de6ead09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=710&q=80"
                    alt="cachorrito de perro y gatito durmiendo juntos"
                  />
                  <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                    <Card.Title>
                      <h3 className="f-title fw-bold">
                        Cuidado Completo Primeros Pasos
                      </h3>
                    </Card.Title>
                    <br />
                    <Card.Text className="f-text fs-5">
                      Para cachorros y gatitos de 0 a 5 años.
                    </Card.Text>
                    <Link to="/contacto" className="btn btn-primary mt-3">
                      Saber más <FaPaw className="ms-2" style={{ transform: "rotate(30deg)" }} />{" "}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="box p-2 m-3 h-100">
                  <Card.Img
                    variant="top"
                    className="img-fluid img-thumbnail rounded-3"
                    src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    alt="perro joven corriendo en el mar"
                  />
                  <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                    <Card.Title>
                      <h3 className="f-title fw-bold">
                        {" "}
                        Cuidado Completo Madurando
                      </h3>
                    </Card.Title>
                    <br />
                    <Card.Text className="f-text fs-5">
                      Para perros y gatos en crecimiento de 5 a 10 años
                    </Card.Text>
                    <Link to="/contacto" className="btn btn-primary mt-3">
                      Saber más <FaPaw className="ms-2" style={{ transform: "rotate(30deg)" }} />
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="box p-2 m-3 h-100">
                  <Card.Img
                    variant="top"
                    className="img-fluid img-thumbnail rounded-3"
                    src="https://images.unsplash.com/photo-1594387992816-65f5d74c1de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdHRlbiUyMGFuZCUyMHB1cHB5fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="gato adulto acostado en la cama"
                  />
                  <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                    <Card.Title>
                      <h3 className="f-title fw-bold">
                        {" "}
                        Cuidado Completo Plus
                      </h3>
                    </Card.Title>
                    <br />
                    <Card.Text className="f-text fs-5">
                      Para perros y gatos adultos de más de 10 años.
                    </Card.Text>
                    <Link to="/contacto" className="btn btn-primary mt-3">
                      Saber más <FaPaw className="ms-2" style={{ transform: "rotate(30deg)" }} />
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Planes;
