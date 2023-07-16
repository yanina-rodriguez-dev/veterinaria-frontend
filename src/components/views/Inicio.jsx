import React from 'react';
import { Row } from 'react-bootstrap';
import Planes from './PaginaPrincipal/Planes';

const Inicio = () => {
    return (
      <section>
        <Container>
            <Row>
                <Planes></Planes>
                <Marcas></Marcas>
            </Row>
        </Container>
      </section>
    );
};

export default Inicio;