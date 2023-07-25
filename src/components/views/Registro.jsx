import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (nuevoUsuario) => {
    console.log(nuevoUsuario)
    reset();
  };

  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center titulos">Registro de Usuarios</h3>
      <hr />
      <div className="row justify-content-center w-100 ps-4">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre y apellido"
                maxLength={30}
                minLength={7}
                {...register("nombreRegistro", {
                  required: "El nombre es un campo requerido.",
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreRegistro?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                maxLength={100}
                minLength={7}
                {...register("emailRegistro", {
                  required: "El email es un dato obligatorio",
                  pattern: {
                    value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
                    message:
                      "El email debe tener el siguiente formato: mail@dominio.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>DNI</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese su DNI"
                maxLength={30}
                minLength={7}
                {...register("El DNI es un campo requerido")}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese su número de teléfono"
                maxLength={17}
                minLength={7}
              />
            </Form.Group>
            <div className="text-center">
              <Button className="btn boton mb-2" type="submit">
                Registrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
