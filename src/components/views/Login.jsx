import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Container>
       <h1 className="text-center tipografiaTitulo py-4">Iniciar sesion</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recuerdame" />
        </Form.Group>
        <Button variant="primary" type="submit">
         Acceder
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
