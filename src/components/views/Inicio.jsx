import Banner from "./paginaPrincipal/Banner";
import Opiniones from "./paginaPrincipal/Opiniones";
import "./paginaPrincipal/banner.css";
import "./paginaPrincipal/opiniones.css";
import { Row } from "react-bootstrap";
import Planes from "./PaginaPrincipal/Planes";
import Marcas from "./PaginaPrincipal/Marcas.jsx";
import { Container } from "react-bootstrap";
import Servicios from "./PaginaPrincipal/Servicios"
import Profesionales from "./PaginaPrincipal/Profesionales"

const Inicio = () => {
  return (
    <>
      <div className="container-fluid">
        <Banner />
      </div>
      {/* <Container> */}
        {/* <Row> */}
          <Planes></Planes>
          <Opiniones />
          <Marcas></Marcas>
          <Servicios></Servicios>
          <Profesionales></Profesionales>
        {/* </Row> */}
      {/* </Container> */}
      
    </>
  );
};

export default Inicio;