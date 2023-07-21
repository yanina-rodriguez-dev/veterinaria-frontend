// import React from 'react';
import Banner from './paginaPrincipal/Banner';
import Opiniones from './paginaPrincipal/Opiniones';
import "./paginaPrincipal/banner.css"
import "./paginaPrincipal/opiniones.css"
import { Row } from 'react-bootstrap';
import Planes from './PaginaPrincipal/Planes';
import Marcas from './PaginaPrincipal/Marcas';
import { Container } from 'react-bootstrap';

const Inicio = () => {
    return (
      <section>

<div className='container-fluid'>
            <Banner/>
            
        </div>

        <Container>
            <Row>
                <Planes></Planes>
                <Opiniones/>
                <Marcas></Marcas>
            </Row>
        </Container>
      </section>
    );
};

export default Inicio;