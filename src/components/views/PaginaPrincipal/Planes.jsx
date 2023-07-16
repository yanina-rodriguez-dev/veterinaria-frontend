import { Col, Card, CardGroup, Button } from "react-bootstrap";

const Planes = () => {
  return (
    <section>
      <Col md={4} ld={3} className="mb-3">
        <CardGroup className="container">
          <Card className="box">
            <Card.Img
              variant="top"
              src="src/assets/planes-primeros-pasos.jpg"
            />
            <Card.Body>
              <Card.Title  className="text-verde">
               <h3>Cuidado Completo Primeros Pasos</h3> 
              </Card.Title>
              <br />
              <Card.Text className="text-verde">Para cachorros y gatitos de 0 a 5 años.</Card.Text>
              <Button className="btn btn-primary">Saber más</Button>
            </Card.Body>
          </Card>
          <Card className="box">
            <Card.Img variant="top" src="src/assets/planes-madurando.jpg" />
            <Card.Body>
              <Card.Title className="text-verde">
              <h3> Cuidado Completo Madurando</h3>
              </Card.Title>
              <br />
              <Card.Text className="text-verde">
                Para perros y gatos en crecimiento de 5 a 10 años
              </Card.Text>
              <Button className="btn btn-primary">Saber más</Button>
            </Card.Body>
          </Card>
          <Card className="box">
            <Card.Img variant="top" src="src/assets/planes-plus.jpg" />
            <Card.Body>
              <Card.Title className="text-verde">
              <h3>  Cuidado Completo Plus</h3> 
              </Card.Title>
<br />
              <Card.Text className="text-verde">
                Para perros y gatos adultos de más de 10 años.
              </Card.Text>
              <Button className="btn btn-primary">Saber más</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
    </section>
  );
};

export default Planes;
