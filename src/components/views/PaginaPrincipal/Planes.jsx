import { Card, Button, Col, Row, Container } from "react-bootstrap";
import { FaPaw } from "react-icons/fa"; 

const Planes = () => {
  return (
    <section>
     <div className="banner-Planes">
     <img className="img-fluid rounded-3" src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80tos/xulIYVIbYIc" alt=""/> 
     <div className="p-4"> 
        <div className="p-4 text-dark bg-beige container mb-4">
        <h2 className=" text-dark bg-beige fw-bold f-title fs-1 mb-2">Planes de salud para mascotas</h2>
       <br />
        <h3 className="f-text fs-2 mb-2">Te ayudamos a mantener a tu mascota feliz y saludable</h3>
        <br />
        <p className="f-text fs-4 mb-2 p-2">
          Creados específicamente para perros y gatos, nuestros planes de salud
          Cuidado Completo son la forma más rentable de mantener a las mascotas
          protegidas durante todo el año.
        </p>
        </div>
      </div>
      </div>
      <div className="bg-beige">
      <Container> 
      <Row xs={1} md={3}  lg={3} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={3}>
        <div className="bg-beige p-2">
          <Card className="box p-2 m-3">
            <Card.Img variant="top" className="img-fluid img-thumbnail rounded-3" src="https://images.unsplash.com/photo-1616493039661-8a63de6ead09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=710&q=80" alt="cachorrito de perro y gatito durmiendo juntos" />
            <Card.Body>
            <Card.Title>
              <h3 className="text-verde f-title fw-bold fs-2 mt-2">Cuidado Completo Primeros Pasos</h3>
            </Card.Title>
            <br />
            <Card.Text className="text-verde f-text fs-3">
              Para cachorros y gatitos de 0 a 5 años.
            </Card.Text>
            <Button className="btn mt-2">Saber más <FaPaw style={{ transform: 'rotate(30deg)' }}/> </Button>
            </Card.Body>
          </Card>
          <Card className="box p-2 m-3">
            <Card.Img variant="top" className="img-fluid img-thumbnail rounded-3" src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="perro joven corriendo en el mar" />
            <Card.Body>
              <Card.Title>
                <h3 className="text-verde f-title fw-bold fs-2"> Cuidado Completo Madurando</h3>
              </Card.Title>
              <br />
              <Card.Text className="text-verde f-text fs-3">
                Para perros y gatos en crecimiento de 5 a 10 años
              </Card.Text>
              <Button className="btn">Saber más <FaPaw style={{ transform: 'rotate(30deg)' }}/></Button>
            </Card.Body>
          </Card>
          <Card className="box p-2 m-3">
            <Card.Img variant="top" className="img-fluid img-thumbnail rounded-3" src="https://images.unsplash.com/photo-1594387992816-65f5d74c1de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdHRlbiUyMGFuZCUyMHB1cHB5fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="gato adulto acostado en la cama" />
            <Card.Body>
              <Card.Title>
                <h3 className="text-verde f-title fw-bold fs-2 mt-3"> Cuidado Completo Plus</h3>
              </Card.Title>
              <br />
              <Card.Text className="text-verde f-text fs-3">
                Para perros y gatos adultos de más de 10 años.
              </Card.Text>
              <Button className="btn mt-3">Saber más <FaPaw style={{ transform: 'rotate(30deg)' }}/></Button>
            </Card.Body>
          </Card>
        </div>
        </Col>
        ))}
      </Row>
      </Container>
      </div>
    </section>
  );
};

export default Planes;
