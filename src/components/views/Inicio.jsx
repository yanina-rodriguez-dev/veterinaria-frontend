import Banner from "./paginaPrincipal/Banner";
import Opiniones from "./paginaPrincipal/Opiniones";
import "../../css/banner.css";
import "../../css/opiniones.css";
import Planes from "./PaginaPrincipal/Planes";
import Marcas from "./PaginaPrincipal/Marcas.jsx";
import Productos from "./PaginaPrincipal/Productos.jsx";
import Servicios from "./PaginaPrincipal/Servicios";
import Profesionales from "./PaginaPrincipal/Profesionales";
import { Container } from "react-bootstrap";

const Inicio = () => {
  return (
    <div className="fondoGeneral tipografia">
      <Container fluid>
        <Banner />
      </Container>
      <Planes />
      <Profesionales />
      <Servicios />
      <Productos />
      <Opiniones />
      <Marcas />
    </div>
  );
};

export default Inicio;
