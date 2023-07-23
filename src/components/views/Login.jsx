import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import login from "../../css/login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (usuario) => {
    console.log(usuario);
  };

  return (
    <section className="row d-flex justify-content-center fondoLogin m-0">
      <Form
        className="text-center container mx-5 d-flex flex-column col-lg-3 col-md-4 my-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="titulos">Iniciar sesion</h1>
        <Form.Group className="mb-3 container" controlId="formBasicEmail">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Nunca compartiremos tu contraseña con nadie mas.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 container" controlId="formBasicPassword">
          <Form.Label>Clave</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" className="mx-5" type="submit">
          Acceder
        </Button>
      </Form>
    </section>
  );
};

export default Login;
