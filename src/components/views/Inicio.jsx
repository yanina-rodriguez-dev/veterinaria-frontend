// import React from 'react';
import Banner from './paginaPrincipal/Banner';
import Opiniones from './paginaPrincipal/Opiniones';
import "./paginaPrincipal/banner.css"
import "./paginaPrincipal/opiniones.css"
import { Row } from 'react-bootstrap';
import Planes from './PaginaPrincipal/Planes';
import Marcas from './PaginaPrincipal/Marcas';
import { Container } from 'react-bootstrap';
import Menu from '../common/Menu';
import Footer from "../common/Footer"

const Inicio = () => {
    return (
      <section>
        <Menu></Menu>

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
        <Footer></Footer>
      </section>
    );
};

export default Inicio;