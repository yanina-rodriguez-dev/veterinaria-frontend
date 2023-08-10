import { Button, Form } from "react-bootstrap";
import MapIframe from './map';
import '../../css/app.css';

const Contacto = () => {
  return (
    <div className="pt-5 mainSection fondoRegistro titulos">
      <h3 className="text-center titulos">Contáctanos!</h3>
      <hr />
      <div className="row justify-content-center w-100 ps-4 pb-4">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form className="titulos contenedorFormulario p-4">
            <Form.Group className="mb-2">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre y apellido"
                required
                minLength="2"
                maxLength="80"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
                required
                minLength="10"
                maxLength="70"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Tipo de Consulta</Form.Label>
              <Form.Select>
                <option value="">Seleccione una opción</option>
                <option value="consulta">Consulta Veterinaria</option>
                <option value="plan">Servicio Plan</option>
                <option value="madurando">Servicio Madurando</option>
                <option value="adultos">Servicio Adultos</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Consulta</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                minLength="10"
                maxLength="500"
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
      <MapIframe></MapIframe>
    </div>
  );
};

export default Contacto;