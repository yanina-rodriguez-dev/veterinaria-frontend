import { Button, Col, Row, Container } from "react-bootstrap";
import React from "react";

const Error404 = () => {
  return (
      <section className="error text-center">
          <Container className="mt-5 text-center">
            <Row>
                <Col className="mt-5">
                <iframe
            src="https://giphy.com/embed/0pPII0x2YJsUTHU5OT"
            width="480"
            height="270"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            ></iframe>
          <p>
            <a href="https://giphy.com/gifs/paws-dog-walking-pawprints-0pPII0x2YJsUTHU5OT"></a>
          </p>
            <h1 className="f-title mt-5">Error 404</h1>
            <h2 className="f-text mt-3">No quedan huellas de la pagina que estabas buscando...</h2>
      <Button variant="default" className="btnError mt-3" to={"/src/components/views/Inicio.jsx"}>Volver al inicio</Button>
                </Col>
            </Row>
          </Container>
          </section>
  );
};

export default Error404;
