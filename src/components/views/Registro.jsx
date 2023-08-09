import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { crearUsuario } from "../helpers/queries";

const Registro = () => {
  let [usuarioAdmin, setUsuarioAdmin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const usuariosSession = JSON.parse(sessionStorage.getItem("usuario"));
    if (usuariosSession) {
      if (usuariosSession.esAdmin) {
        setUsuarioAdmin(true);
      }
    }
  }, [usuarioAdmin]);

  const onSubmit = (cliente) => {
    if (usuarioAdmin) {
      const usuarioConAdmin = { ...cliente, esAdmin: true };
      crearUsuario(usuarioConAdmin).then((respuesta) => {
        if (respuesta.status === 201) {
          Swal.fire(
            "Usuario Administrador creado",
            `El usuario ${usuarioConAdmin.nombreUsuario} fue creado correctamente`,
            "success"
          );
          reset();
        } else {
          Swal.fire(
            "Ocurrio un error",
            `El usuario ${usuarioConAdmin.nombreUsuario} no pudo ser creado`,
            "error"
          );
        }
      });
    } else {
      const usuarioSinAdmin = { ...cliente, esAdmin: false };
      crearUsuario(usuarioSinAdmin).then((respuesta) => {
        if (respuesta.status === 201) {
          Swal.fire(
            "Usuario creado",
            `El usuario ${usuarioSinAdmin.nombreUsuario} fue creado correctamente`,
            "success"
          );
          reset();
        } else {
          Swal.fire(
            "Ocurrio un error",
            `El usuario ${usuarioSinAdmin.nombreUsuario} no pudo ser creado`,
            "error"
          );
        }
      });
    }
  };

  return (
    <div className="pt-5 mainSection fondoRegistro">
      {usuarioAdmin ? (
        <h3 className="text-center titulos">
          Registro de Nuevos Administradores
        </h3>
      ) : (
        <h3 className="text-center titulos">Registro de Usuarios</h3>
      )}
      <hr />
      <Row className="justify-content-center w-100 ps-4">
        <Col xs={12} sm={9} md={4}>
          <Form onSubmit={handleSubmit(onSubmit)} className="titulos">
            <Form.Group className="mb-2" controlId="formRegistroNombre">
              <Form.Label>Nombre y Apellido:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su apellido"
                {...register("nombreUsuario", {
                  required: "El nombre del cliente es obligatorio",
                  minLength: {
                    value: 2,
                    message: "La cantidad minima de carácteres es 2",
                  },
                  maxLength: {
                    value: 50,
                    message: "La cantidad maxima de carácteres es 50",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreUsuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formPaciente">
              <Form.Label>Dirección:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Rivadavia 1050"
                {...register("direccion", {
                  required: "La dirección es obligatoria",
                  minLength: {
                    value: 5,
                    message: "La cantidad minima de carácteres es 5",
                  },
                  maxLength: {
                    value: 60,
                    message: "La cantidad maxima de carácteres es 60",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.direccion?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formRegistroEmail">
              <Form.Label>Correo electronico:</Form.Label>
              <Form.Control
                type="email"
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
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formRegistroDni">
              <Form.Label>DNI:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 12345678"
                {...register("dni", {
                  required: "El DNI es obligatorio",
                  pattern: {
                    value: /^[0-9]{8}$/,
                    message: "Ingresa un número de DNI válido (8 dígitos)",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.dni?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formRegistroTelefono">
              <Form.Label>Telefono:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 3816810178"
                {...register("telefono", {
                  required: "El telefono del paciente es obligatorio",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message:
                      "Ingresa un número de teléfono válido (10 dígitos)",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.telefono?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formRegistroPassword">
              <Form.Label>Clave:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese una contraseña"
                {...register("password", {
                  required: "El password es obligatorio",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message: `La contraseña debe tener al entre 8 y 16 caracteres, al menos una minúscula, una mayúscula y un número.
                 NO puede tener otros símbolos.`,
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Container className="text-center">
              <Button className="btn-lg mb-2" type="submit">
                Registrar
              </Button>
            </Container>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Registro;
