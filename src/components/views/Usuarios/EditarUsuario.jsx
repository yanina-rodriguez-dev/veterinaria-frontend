import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { editarUsuario, obtenerUsuario } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarUsuario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();
  const [usuarioCompleto, setUsuarioCompleto] = useState({});

  useEffect(() => {
    obtenerUsuario(id).then((respuesta) => {
      setUsuarioCompleto(respuesta);
      console.log(usuarioCompleto);
      if (respuesta) {
        setValue("nombreUsuario", respuesta.nombreUsuario);
        setValue("telefono", respuesta.telefono);
        setValue("direccion", respuesta.direccion);
        setValue("dni", respuesta.dni);
      }
    });
  }, []);

  const onSubmit = (usuarioEditado) => {
    const usuarioEditadoCompleto = {
      ...usuarioCompleto,
      nombreUsuario: usuarioEditado.nombreUsuario || nombreUsuario,
      telefono: usuarioEditado.telefono || telefono,
      dni: usuarioEditado.dni || dni,
      direccion: usuarioEditado.direccion || direccion,
    };

    console.log(usuarioEditadoCompleto);
    editarUsuario(usuarioEditadoCompleto, id).then((respuesta) => {
      if (respuesta) {
        Swal.fire(
          "Usuario editado",
          `El usuario ${usuarioEditadoCompleto.nombreUsuario} se editó correctamente`,
          "success"
        );
        reset();
        navegacion("/administrador/admusuarios");
      } else {
        Swal.fire(
          "Ocurrió un error",
          `El usuario ${usuarioEditadoCompleto.nombreUsuario} no pudo ser editado`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar Usuario</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formEditarNombreUsuario">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Ana"
            {...register("nombreUsuario", {
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
            {errors.nombreUsuario?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTelefono">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 3816810178"
            {...register("telefono", {
              required: "El telefono del usuario es obligatorio",
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
        <Form.Group className="mb-2" controlId="formEditarDni">
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
          <Form.Text className="text-danger">{errors.dni?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEditarDireccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Rivadavia 1050"
            {...register("direccion", {
              required: "La dirección del usuario es obligatoria",
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
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarUsuario;
