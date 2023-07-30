import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { editarPaciente, obtenerPaciente } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarPaciente = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    obtenerPaciente(id).then((respuesta) => {
      if (respuesta) {
        setValue("nombreDueno", respuesta.nombreDueno);
        setValue("email", respuesta.email);
        setValue("telefono", respuesta.telefono);
        setValue("direccion", respuesta.direccion);
        setValue("nombrePaciente", respuesta.nombrePaciente);
        setValue("especie", respuesta.especie);
        setValue("raza", respuesta.raza);
      }
    });
  }, []);

  const onSubmit = (pacienteEditado) => {
    console.log(pacienteEditado);
    editarPaciente(pacienteEditado, id).then((respuesta) => {
      if (respuesta) {
        Swal.fire(
          "Paciente editado",
          `El paciente ${pacienteEditado.nombreDueno} se editó correctamente`,
          "success"
        );
        reset();
        navegacion("/administrador/AdmPacientes");
      } else {
        Swal.fire(
          "Ocurrió un error",
          `El paciente ${pacienteEditado.nombreDueno} no pudo ser editado`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar paciente</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Nombre</Form.Label>
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
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarPaciente;
