import { Button } from "react-bootstrap";
import errorCanva from '../../assets/404/errorCanva.png';
import { Link } from 'react-router-dom';
import "../../css/error404.css"


const Error404 = () => {
  return (
    <section className="error text-center my-0 mt-0 mainSection fondoError">
      <img src={errorCanva} alt="error404"/>
      <div>
        <Link to="/">
        <Button variant="default" className="btnError my-3 text-light">Volver al inicio</Button>
        </Link>
      </div>
    </section>
  );
};

export default Error404;
