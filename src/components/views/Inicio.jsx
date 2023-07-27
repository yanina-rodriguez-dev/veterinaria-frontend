import Banner from "./paginaPrincipal/Banner";
import Opiniones from "./paginaPrincipal/Opiniones";
import "./paginaPrincipal/banner.css";
import "./paginaPrincipal/opiniones.css";
import Planes from "./PaginaPrincipal/Planes";
import Marcas from "./PaginaPrincipal/Marcas.jsx";
import Productos from "./PaginaPrincipal/Productos.jsx";
import Servicios from "./PaginaPrincipal/Servicios";
import Profesionales from "./PaginaPrincipal/Profesionales";
import { Container } from "react-bootstrap";

const Inicio = () => {
  return (
    <>
      <Container fluid>
        <Banner />
      </Container>
      <Planes></Planes>
      <Profesionales />
      <Servicios />
      <Opiniones />
      <Productos></Productos>
      <Marcas></Marcas>
    </>
  );
};

export default Inicio;
