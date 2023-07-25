import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
    // console.log(usuariosSession.esAdmin);
    if (usuariosSession) {
      if (usuariosSession.esAdmin) {
        setUsuarioAdmin(true);
      }
    }
    // Este efecto se ejecutará cada vez que se actualice el estado de usuarioAdmin
    console.log("El estado de usuarioAdmin se ha actualizado:", usuarioAdmin);
  }, [usuarioAdmin]);

  const onSubmit = (cliente) => {
    // Verificar si el usuario es administrador antes de continuar
    if (usuarioAdmin) {
      const usuarioConAdmin = { ...cliente, esAdmin : true };
      // Código a ejecutar si el usuario es administrador
      console.log("El usuario es administrador. Puedes continuar con la lógica específica para administradores.");
      console.log(usuarioConAdmin);
    } else {
      const usuarioSinAdmin = { ...cliente, esAdmin : false };
      // Código a ejecutar si el usuario NO es administrador
      console.log("El usuario NO es administrador. Realiza las acciones para usuarios no administradores.");
      console.log(usuarioSinAdmin);
    }

  };

  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center titulos">Registro de Usuarios</h3>
      <hr />
      <Row className="justify-content-center w-100 ps-4">
        <Col xs={12} sm={9} md={4}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2" controlId="formRegistroNombre">
              <Form.Label>Nombre y Apellido:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su apellido"
                {...register("nombreCliente", {
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
                {errors.nombreCliente?.message}
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
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
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
                    message: "Ingresa un número de teléfono válido (8 dígitos)",
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
                    message: `La contraseña debe tener al entre 8 y 16 caracteres, al menos una minúscula y una mayúscula.
                 NO puede tener otros símbolos.`,
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Container className="text-center">
              <Button className="btn boton mb-2" type="submit">
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
