import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { editarTurno, obtenerTurno } from "../../helpers/queries";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditarTurno = () => {
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
    obtenerTurno(id).then((respuesta) => {
      if (respuesta) {
        setValue("nombreDueno", respuesta.nombreDueno);
        setValue("detalleCita", respuesta.detalleCita);
        setValue("nombreVeterinario", respuesta.nombreVeterinario);
        setValue("nombreMascota", respuesta.nombreMascota);
        setValue("hora", respuesta.hora);
        const fechaFormateada = new Date(respuesta.fecha).toISOString().split('T')[0];
        setValue("fecha", fechaFormateada);
        setValue("id", respuesta.id);
      }
    });
  }, []);
  const onSubmit = (turnoeditado) => {
    console.log(turnoeditado);
    editarTurno(turnoeditado, id).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Turno modificado",
          `El turno fue modificado correctamente`,
          "success"
        );
        reset();
        navegacion("../admturnos");
      } else {
        Swal.fire(
          "Ocurrió un error",
          `El turno no pudo ser modificado`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar Turno</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Ana"
            {...register("nombreDueno", {
              required: "El nombre del dueño es obligatorio",
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
            {errors.nombreVeterinario?.message}
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
            {errors.nombreMascota?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTurno">
          <Form.Label>Hora</Form.Label>
          <Form.Select
            {...register("hora", {
              required: "La hora del turno es obligatoria",
            })}
            aria-label="form"
            required
          >
            <option value="">Elija un horario</option>
            <option value="8:30">8:30</option>
            <option value="9:30">9:30</option>
            <option value="10:30">10:30</option>
            <option value="11:30">11:30</option>
            <option value="12:30">12:30</option>
            <option value="13:30">13:30</option>
            <option value="14:30">14:30</option>
            <option value="15:30">15:30</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.hora?.message}</Form.Text>
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
            {errors.fecha?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarTurno;
