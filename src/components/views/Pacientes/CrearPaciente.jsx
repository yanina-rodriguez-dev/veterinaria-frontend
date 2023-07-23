import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CrearPaciente = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    return (
        <section className="container mainSection">
            <h1 className="display-4 mt-5">Nuevo producto</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formNombreProducto">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Cafe"
                        {...register('nombrePaciente',
                            {
                                required: 'El nombre del producto es obligatorio',
                                minLength: {
                                    value: 2,
                                    message: 'La cantidad minima de carácteres es 2'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'La cantidad maxima de carácteres es 50'
                                },
                            })
                        }
                    />
                    <Form.Text className="text-danger">
                        {errors.nombreProducto?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNombreProducto">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Cafe"
                        {...register('apellidoPaciente',
                            {
                                required: 'El nombre del producto es obligatorio',
                                minLength: {
                                    value: 2,
                                    message: 'La cantidad minima de carácteres es 2'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'La cantidad maxima de carácteres es 50'
                                },
                            })
                        }
                    />
                    <Form.Text className="text-danger">
                        {errors.nombreProducto?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNombreProducto">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Cafe"
                        {...register('email',
                            {
                                required: 'El nombre del producto es obligatorio',
                                minLength: {
                                    value: 2,
                                    message: 'La cantidad minima de carácteres es 2'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'La cantidad maxima de carácteres es 50'
                                },
                            })
                        }
                    />
                    <Form.Text className="text-danger">
                        {errors.nombreProducto?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ej: 50"
                        {...register('telefono', {
                            required: 'El precio del producto es obligatorio',
                            min: {
                                value: 1,
                                message: 'El precio minimo es $1'
                            },
                            max: {
                                value: 100000,
                                message: 'El precio maximo es $100000'
                            },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.precioProducto?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNombreProducto">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Cafe"
                        {...register('direccion',
                            {
                                required: 'El nombre del producto es obligatorio',
                                minLength: {
                                    value: 2,
                                    message: 'La cantidad minima de carácteres es 2'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'La cantidad maxima de carácteres es 50'
                                },
                            })
                        }
                    />
                    <Form.Text className="text-danger">
                        {errors.nombreProducto?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNombreProducto">
                    <Form.Label>Nombre Mascota</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Cafe"
                        {...register('nombreMascota',
                            {
                                required: 'El nombre del producto es obligatorio',
                                minLength: {
                                    value: 2,
                                    message: 'La cantidad minima de carácteres es 2'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'La cantidad maxima de carácteres es 50'
                                },
                            })
                        }
                    />
                    <Form.Text className="text-danger">
                        {errors.nombreProducto?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNombreProducto">
                    <Form.Label>Especie</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Cafe"
                        {...register('especie',
                            {
                                required: 'El nombre del producto es obligatorio',
                                minLength: {
                                    value: 2,
                                    message: 'La cantidad minima de carácteres es 2'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'La cantidad maxima de carácteres es 50'
                                },
                            })
                        }
                    />
                    <Form.Text className="text-danger">
                        {errors.nombreProducto?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNombreProducto">
                    <Form.Label>Raza</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Cafe"
                        {...register('raza',
                            {
                                required: 'El nombre del producto es obligatorio',
                                minLength: {
                                    value: 2,
                                    message: 'La cantidad minima de carácteres es 2'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'La cantidad maxima de carácteres es 50'
                                },
                            })
                        }
                    />
                    <Form.Text className="text-danger">
                        {errors.nombreProducto?.message}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </section>
    );
};

export default CrearPaciente;