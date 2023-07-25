import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Contacto = () => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();

      const onSubmit = (usuario)=>{

      }
    return (
        <div className="mt-5 mainSection">
            <h3 className="text-center titulos">Contáctanos!</h3>
            <hr />
            <div className="row justify-content-center w-100 ps-4">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-2">
                            <Form.Label>Nombre y Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese un nombre y apellido"
                                maxLength={30}
                                minLength={7}
                                {
                                    ...register('nombreContacto', {
                                        required:'El nombre es un dato obligatorio.'
                                    })
                                }
                            />
                            <Form.Text className="text-danger">
                                {errors.nombreContacto?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese un email" 
                            maxLength={100}
                            minLength={11}
                            {
                                ...register('email',{
                                  required: 'El mail es un dato obligatorio',
                                  pattern: {
                                    value:/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'El email debe tener el siguiente formato email@dominio.com'
                          
                                  }  
                                }
                                )
                            }
                            />
                              <Form.Text className="text-danger">
                                {errors.email?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Tipo de Consulta</Form.Label>
                            <Form.Select
                            >
                                <option value="">Seleccione una opción</option>
                                <option value="consulta">Consulta Veterinaria</option>
                                <option value="plan">Servicio Plan</option>
                                <option value="madurando">Servicio Madurando</option>
                                <option value="adultos">Servicio Adultos</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Consulta</Form.Label>
                            <Form.Control as="textarea" rows={3} 
                            {...register('consulta')

                            }
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button
                                className="btn boton mb-2"
                                type="submit"
                            >
                                Registrar
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>

    );
};

export default Contacto;