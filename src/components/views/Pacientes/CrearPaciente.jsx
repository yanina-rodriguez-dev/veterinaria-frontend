import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearPaciente } from "../../helpers/queries";

const CrearPaciente = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (pacienteNuevo) => {
    console.log(pacienteNuevo);
    crearPaciente(pacienteNuevo).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Paciente creado",
          `El paciente ${pacienteNuevo.nombrePaciente} fue creado correctamente`,
          "success"
        );
        reset();
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El paciente ${pacienteNuevo.nombrePaciente} no pudo ser creado`,
          "error"
        );
      }
    });
  };
  return (
    <section className="mainSection fondoRegistro titulos">
      <div className="container">
      <h1 className="display-4 mt-5 text-center titulos">Nuevo Paciente</h1>
      <hr />
      <Row className="justify-content-center w-100 ps-4">
        <Col xs={12} sm={9} md={4}>
      <Form onSubmit={handleSubmit(onSubmit)} className="my-5 contenedorFormulario p-4">
        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Ana"
            {...register("nombreDueno", {
              required: "El nombre del paciente es obligatorio",
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
            {errors.nombreDueno?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ej: anisantillan10@gmail.com"
            {...register("email", {
              required: "El email es obligatorio",
              maxLength: {
                value: 50,
                message: "La cantidad maxima de carácteres es 50",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 3816810178"
            {...register("telefono", {
              required: "El telefono del paciente es obligatorio",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Ingresa un número de teléfono válido (10 dígitos)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.telefono?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Rivadavia 1050"
            {...register("direccion", {
              required: "La dirección del paciente es obligatoria",
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
        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Nombre Mascota</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Bianca"
            {...register("nombrePaciente", {
              required: "El nombre de la mascota es obligatorio",
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
            {errors.nombrePaciente?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Especie</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: perro"
            {...register("especie", {
              required: "La especie es obligatoria",
              minLength: {
                value: 2,
                message: "La cantidad minima de carácteres es 2",
              },
              maxLength: {
                value: 30,
                message: "La cantidad maxima de carácteres es 30",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.especie?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Raza</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: ovejero belga"
            {...register("raza", {
              required: "La raza es obligatoria",
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
          <Form.Text className="text-danger">{errors.raza?.message}</Form.Text>
        </Form.Group>
        <div className="text-center">
        <Button variant="primary" type="submit">
          Guardar
        </Button>
        </div>
      </Form>
      </Col>
      </Row>
      </div>
    </section>
  );
};

export default CrearPaciente;
