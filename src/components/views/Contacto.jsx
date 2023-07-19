import { Button, Form } from "react-bootstrap";

const Contacto = () => {
    return (
        <div className="mt-5 mainSection">
            <h3 className="text-center titulos">Contactanos!</h3>
            <hr />
            <div className="row justify-content-center w-100 ps-4">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <Form>
                        <Form.Group className="mb-2">
                            <Form.Label>Nombre y Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese un nombre y apellido"
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese un email" />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Tipo de Consulta</Form.Label>
                            <Form.Select
                            >
                                <option value="">Seleccione una opcion</option>
                                <option value="consulta">Consulta Veterinaria</option>
                                <option value="plan">Servicio Plan</option>
                                <option value="madurando">Servicio Madurando</option>
                                <option value="adultos">Servicio Adultos</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Consulta</Form.Label>
                            <Form.Control as="textarea" rows={3} />
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