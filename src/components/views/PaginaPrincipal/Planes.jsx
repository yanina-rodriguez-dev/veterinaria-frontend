import { Col, Card, CardGroup, Button } from "react-bootstrap";

const Planes = () => {
  return (
    <section>
      <Col md={4} ld={3} className="mb-3">
     <div className="banner-Planes">
     <img className="img-fluid h-100 img-thumbnail rounded-3" src="src/assets/planes-salud-mascotas.png" alt=""/> 
     <div>
        <h2 className="text-verde fw-bold">Planes de salud para mascotas</h2>
        <h3 className="text-verde fw-semibold">Te ayudamos a mantener a tu mascota feliz y saludable</h3>
        <p className="text-verde">
          Creados específicamente para perros y gatos, nuestros planes de salud
          Cuidado Completo son la forma más rentable de mantener a las mascotas
          protegidas durante todo el año.
        </p>
      </div>
      </div>
        {/* <CardGroup className="container"> */}
        <div className="container">
          <Card className="box">
            <Card.Img variant="top" src="./src/assets/planes-primeros-pasos.jpg" />
            <Card.Body>
            <Card.Title className="text-verde">
              <h3>Cuidado Completo Primeros Pasos</h3>
            </Card.Title>
            <br />
            <Card.Text className="text-verde">
              Para cachorros y gatitos de 0 a 5 años.
            </Card.Text>
            <Button className="btn btn-teal">Saber más</Button>
            </Card.Body>
          </Card>
          <Card className="box">
            <Card.Img variant="top" src="./src/assets/planes-madurando.jpg" />
            <Card.Body>
              <Card.Title className="text-verde">
                <h3> Cuidado Completo Madurando</h3>
              </Card.Title>
              <br />
              <Card.Text className="text-verde">
                Para perros y gatos en crecimiento de 5 a 10 años
              </Card.Text>
              <Button className="btn btn-teal">Saber más</Button>
            </Card.Body>
          </Card>
          <Card className="box">
            <Card.Img variant="top" src="./src/assets/planes-plus.jpg" />
            <Card.Body>
              <Card.Title className="text-verde">
                <h3> Cuidado Completo Plus</h3>
              </Card.Title>
              <br />
              <Card.Text className="text-verde">
                Para perros y gatos adultos de más de 10 años.
              </Card.Text>
              <Button className="btn btn-teal">Saber más</Button>
            </Card.Body>
          </Card>
          {/* </CardGroup> */}
        </div>
      </Col>
    </section>
  );
};

export default Planes;
