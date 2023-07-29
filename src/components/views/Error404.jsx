import { Button } from "react-bootstrap";
import React from "react";
import error404 from '../../assets/error404.gif';
import { Link } from 'react-router-dom';
import "../../css/Error404.css"


const Error404 = () => {
  return (
    <section className="error text-center mb-5 mainSection">
      <img src={error404} alt="error404" className="widthGif" />
      <div>
      <h2 className="f-text mt-3 d-none d-sm-block text-light">No quedan huellas de la pagina que estabas buscando...</h2>
        <Link to="/">
        <Button variant="default" className="btnError mt-3 text-light">Volver al inicio</Button>
        </Link>
      </div>
    </section>
  );
};

export default Error404;
