import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
 import Swal from "sweetalert2";
import { iniciarSesion } from "../helpers/queries";
import '../../css/login.css'

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    iniciarSesion(usuario).then((respuesta) => {
      if (respuesta) {
        delete respuesta.password;
        sessionStorage.setItem("usuario", JSON.stringify(respuesta));
        if (respuesta.esAdmin) {
          setUsuarioLogueado(respuesta);
          Swal.fire(
            "Sesion administrador iniciada con exito!",
            "Los datos ingresados son correctos.",
            "success"
          );
          reset();
          navegacion("/administrador");
        } else {
          setUsuarioLogueado(respuesta);
          Swal.fire(
            `Sesion iniciada con exito! `,
            `Bienvenido ${respuesta.nombreUsuario}!`,
            "success"
          );
          reset();
          navegacion("/");
        }
      } else {
        Swal.fire("Error!", "El emal o password son incorrectos.", "error");
      }
    });
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
          <Form.Control
            type="email"
            maxLength={80}
            minLength={5}
            placeholder="Ingrese un email"
            {...register("email", {
              required: "El email es un dato obligatorio",
              pattern: {
                value:
                  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/,
                message:
                  "El email debe tener el siguiente formato: 'mail@dominio.com'",
              },
            })}
          />
          <Form.Text className="text-danger">
            Nunca compartiremos tu contraseña.<br></br>
            {errors.email?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 container" controlId="formBasicPassword">
          <Form.Label>Clave</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese una contraseña"
            maxLength={16}
            minLength={8}
            {...register("password", {
              required: "El password es obligatorio",

              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message: `La contraseña debe tener al entre 8 y 16 caracteres, al menos una minúscula y una mayúscula.
                 NO puede tener otros símbolos.`,
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" className="mx-5" type="submit">
          Acceder
        </Button>
      </Form>
    </section>
  );
};

export default Login;
