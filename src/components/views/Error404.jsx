import { Button } from "react-bootstrap";
import React from "react";
import error404 from '../../assets/error404.gif';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <section className="error text-center p-5 mainSection">
      <img src={error404} alt="error404" className="w-75" />
      <div>
        <Link to="/">
        <Button variant="default" className="btnError mt-3">Volver al inicio</Button>
        </Link>
      </div>
    </section>
  );
};

export default Error404;
