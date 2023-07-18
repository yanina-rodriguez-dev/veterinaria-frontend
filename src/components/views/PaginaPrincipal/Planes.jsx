import { Col, Card, Button } from "react-bootstrap";

const Planes = () => {
  return (
    <section>
      {/* <Col md={4} ld={3} className="mb-3"> */}
     <div className="banner-Planes">
     <img className="img-fluid h-100 img-thumbnail rounded-3" src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80tos/xulIYVIbYIc" alt=""/> 
     <div className="p-4"> 
        <h2 className="text-verde fw-bold mb-2">Planes de salud para mascotas</h2>
        <h3 className="text-verde fw-semibold mb-2">Te ayudamos a mantener a tu mascota feliz y saludable</h3>
        <p className="text-verde mb-2">
          Creados específicamente para perros y gatos, nuestros planes de salud
          Cuidado Completo son la forma más rentable de mantener a las mascotas
          protegidas durante todo el año.
        </p>
      </div>
      </div>
        {/* <CardGroup className="container"> */}
        <div className="container p-2">
          <Card className="box">
            <Card.Img variant="top" className="img-fluid rounded-3" src="https://live.staticflickr.com/4146/4985392932_ca67a39f42_b.jpg" alt="cachorrito de perro y gatito durmiendo juntos" />
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
            <Card.Img variant="top" className="img-fluid img-thumbnail rounded-3" src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="perro joven corriendo en el mar" />
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
            <Card.Img variant="top" className="img-fluid h-100 img-thumbnail rounded-3" src="https://images.unsplash.com/photo-1482434368596-fbd06cae4f89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="gato adulto acostado en la cama" />
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
      {/* </Col> */}
    </section>
  );
};

export default Planes;
