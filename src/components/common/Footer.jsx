import { Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { TfiTwitter } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-light pt-3">
      <Container>
        <div className="d-flex justify-content-evenly">
          <section className="fs-1">
            <Link href="#">
              <FaFacebook className="me-3 colorFacebook" variant="primary" />
            </Link>
            <Link href="#">
              <SiInstagram className="me-3 colorInstagram" />
            </Link>
            <Link href="#">
              <TfiTwitter className="me-3" />
            </Link>
            <Link href="#" className="colorWpp">
              <FaWhatsapp />
            </Link>
          </section>
        </div>
        <div className="text-ligh row">
          <article className="mt-5 container col-lg-4 col-md-4 col-sm-12 mx-0">
            <h3 className="mb-4">Nosotros</h3>
            <Link to="/nosotros" className="text-decoration-none text-light">
              Quienes somos
            </Link>
            <hr />
            <Link to="/contacto" className="text-decoration-none text-light">
              Contacto
            </Link>
            <hr />
            <Link to="/nosotros" className="text-decoration-none text-light">
              Ubicacion
            </Link>
            <hr />
            <Link to="/nosotros" className="text-decoration-none text-light">
              Marcas
            </Link>
            <hr />
            <Link to="/nosotros" className="text-decoration-none text-light">
              Productos
            </Link>
            <hr />
          </article>
          <article className="col-lg-4 col-md-4 col-sm-12 mt-5 ps-sm-5">
            <h3 className="mb-4">Ayuda</h3>
            <Link className="text-decoration-none text-light">
              ¿Como comprar?
            </Link>
            <hr />
            <Link className="text-decoration-none text-light">
              Preguntas frecuentes
            </Link>
            <hr />
            <Link className="text-decoration-none text-light">
              Terminos y condiciones
            </Link>
            <hr />
            <Link className="text-decoration-none text-light">
              Politica de devolucion
            </Link>
            <hr />
          </article>
          <div className="col-lg-4 col-md-4">
            <Container>
              <img
                src={logo}
                className="logoFooter mt-md-5 mt-lg-0 m-2"
                alt="logo del sitio"
              />
            </Container>
            <h3 className="text-center mt-3">
              Amamos lo mismo que vos <FaPaw />
            </h3>
          </div>
        </div>
        <div className="pt-2 text-center">
          <p>&copy;2023 Huellitas Center - Todos los derechos reservados</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
