// import React from 'react';
import Banner from './paginaPrincipal/Banner';
import Opiniones from './paginaPrincipal/Opiniones';
import "./paginaPrincipal/banner.css"
import "./paginaPrincipal/opiniones.css"

const Inicio = () => {
    return (
        <div className='container-fluid'>
            <Banner/>
            <Opiniones/>
        </div>
    );
};

export default Inicio;