import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearTurno } from "../../helpers/queries"; // Asegúrate de tener esta función implementada en queries.js
import { useNavigate} from "react-router-dom";

const CrearTurno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  
  const navegacion = useNavigate();

  const onSubmit = (nuevoTurno) => {
    console.log(nuevoTurno);
    crearTurno(nuevoTurno).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Turno creado",
          `El turno fue creado correctamente`,
          "success"
        );
        reset();
        navegacion("../admturnos");
      } else {
        Swal.fire("Ocurrió un error", `El turno no pudo ser creado`, "error");
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo Turno</h1>
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
          <Form.Label>Detalle de cita</Form.Label>
          <Form.Control
            type="text"
            placeholder="Sintomas, motivo de cita, etc."
            {...register("detalleCita", {
              required: "El detalle de la cita es obligatorio",
              minLength: {
                value: 10,
                message: "La cantidad minima de carácteres es 10",
              },
              maxLength: {
                value: 200,
                message: "La cantidad maxima de carácteres es 200",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreDueno?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Veterinario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Dr. Lionel Messi"
            {...register("nombreVeterinario", {
              required: "El nombre del veterinario es obligatorio",
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
          <Form.Label>Mascota</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre de la mascota"
            {...register("nombreMascota", {
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
            {errors.nombreDueno?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Hora</Form.Label>
          <Form.Control
            type="time"
            placeholder="--:--"
            {...register("hora", {
              required: "La hora del turno es obligatorio",
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreDueno?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            placeholder="dd/mm/aaaa"
            {...register("fecha", {
              required: "La fecha del turno es obligatorio",
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreDueno?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearTurno;
