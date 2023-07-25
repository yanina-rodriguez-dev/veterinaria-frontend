import { Button, Col, Form, Row } from "react-bootstrap";
const Registro = () => {
  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center titulos">Registro de Usuarios</h3>
      <hr />
      <Row className="justify-content-center w-100 ps-4">
        <Col xs={12} sm={9} md={6}>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre y apellido"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su dirección"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su email" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>DNI</Form.Label>
              <Form.Control type="number" placeholder="Ingrese su DNI" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese su número de teléfono"
              />
              </Form.Group>
              <Form.Group className="mb-2">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su contraseña"
              />
            </Form.Group>
              <Form.Group className="mb-2">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nuevamente su contraseña"
              />
            </Form.Group>
            <div className="text-center">
              <Button className="btn boton mb-2" type="submit">
                Registrar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Registro;
