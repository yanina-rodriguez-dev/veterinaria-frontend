import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearTurno } from "../../helpers/queries"; // Asegúrate de tener esta función implementada en queries.js
import { useNavigate} from "react-router-dom";
import { useEffect } from "react";

const CrearTurno = ({usuarioLogueado, setusuarioLogueado}) => {
    console.log(usuarioLogueado);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();
  
  const navegacion = useNavigate();

  useEffect(() => {
          setValue("nombreDueno", usuarioLogueado.nombreUsuario);
          console.log(usuarioLogueado.nombreUsuario);
        },[]);
  const onSubmit = (nuevoTurno) => {
    crearTurno(nuevoTurno).then((respuesta) => {
      if (respuesta.status === 201) {
        console.log(respuesta);
        Swal.fire(
          "Turno creado",
          `El turno fue creado correctamente`,
          "success"
        );
        reset();
        navegacion("/");
      } else {
        Swal.fire("Ocurrió un error", `El turno no pudo ser creado`, "error");
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Reservar nuevo turno</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)} className="mb-5">
        <Form.Group className="mb-3" controlId="formPaciente">
          <Form.Label>Nombre del dueño:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Ana"
            disabled
            {...register("nombreDueno")}
          />
          <Form.Text className="text-danger">
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
            {errors.detalleCita?.message}
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
  <Form.Select {...register("hora", {
    required: "La hora del turno es obligatoria",
  })}
  aria-label="form" required>
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
          <Form.Text className="text-danger">
            {errors.hora?.message}

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

            {errors.fecha?.message}

          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Reservar
        </Button>
      </Form>
    </section>
  );
};

export default CrearTurno;
