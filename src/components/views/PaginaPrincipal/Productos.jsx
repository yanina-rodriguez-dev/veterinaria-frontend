import {Card, Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaPaw } from "react-icons/fa";


function Productos() {
  return (
    <Container>
        <h1 className="p-3 my-3 titulos text-center">Nuetros productos</h1>
        <p className="f-text text-center fs-5">En <strong>Huellitas Center&copy;</strong>, ofrecemos una amplia variedad de productos de cuidado animal para satisfacer las necesidades de tus queridas mascotas. Nuestra tienda cuenta con una selección cuidadosamente elegida de productos de alta calidad que incluyen alimentos especializados, suplementos nutricionales, medicamentos, accesorios y productos de higiene.</p>
        <Row>
        <Col xs={12} md={4} className="mb-4">
        <Card className="p-2 m-3 h-100">
      <Card.Img className="card-img-top" src="https://petplanetshop.com.ar/images/product_image/597/0?w=1000&h=1300&fit=contain" alt="comida para perros marca Eukanuba" />
      <Card.Body>
        <Card.Title>Alimentos</Card.Title>
        <p className="italic">Para que coman como chanchos</p>
        <Card.Text className='mb-5'>
        Desde piensos y alimentos húmedos hasta snacks y golosinas, tenemos todo lo que tu mascota necesita para una alimentación equilibrada y nutritiva. 
        </Card.Text>
        <br />
        <Link to='/nosotros' className="btn btn-primary btn-lg my-4 mt-5">
            Ver más <FaPaw className="ms-2" style={{ transform: "rotate(30deg)" }} />
          </Link>      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4">
        <Card className="p-2 m-3 h-100">
      <Card.Img className="card-img-top" src="https://media.istockphoto.com/id/154956025/photo/dog-equipment.jpg?s=1024x1024&w=is&k=20&c=ZskDF-zIwnL1TDZGVO5cbcvHhH-CDAtIB4IErye0B1E=" alt="juguetes para animales" />
      <Card.Body>
        <Card.Title>Accesorios</Card.Title>
        <p className="italic">Para que sean felices, comiendo perdices</p>
        <Card.Text className='mb-5'>
        Tu mascota se merece lo mejor, tenemos una alta gama de juguetes y accessorios para mantener a tus mascotas felices y comiendo perdices.
        </Card.Text>
        <br />
        <Link to='/nosotros' className="btn btn-primary btn-lg my-4 mt-5">
            Ver más <FaPaw className="ms-2" style={{ transform: "rotate(30deg)" }} />
          </Link>      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4">
        <Card className="p-2 m-3 h-100">
      <Card.Img className="card-img-top" src="https://petplanetshop.com.ar/images/product_image/362/0?w=1000&h=1300&fit=contain" alt="producto para pulgas de gatos"/>
      <Card.Body>
        <Card.Title>Salud</Card.Title>
        <p className="italic">Firmes como pata de elefante</p>
        <Card.Text className='mb-5'>
        Nuestros expertos en cuidado animal están disponibles para brindarte asesoramiento personalizado y recomendaciones sobre cuál es el producto adecuado para tu mascota.
        </Card.Text>
        <Link to='/nosotros' className="btn btn-primary btn-lg my-4">
            Ver más <FaPaw className="ms-2" style={{ transform: "rotate(30deg)" }} />
          </Link>      </Card.Body>
    </Card>
        </Col>
        </Row>
    
    </Container>
  );
}

export default Productos;