import { Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import dataFiscal from "../../assets/footer/dataFiscal.png";
import {FaFacebook} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si';
import {TfiTwitter} from 'react-icons/tfi';
import {FaWhatsapp} from 'react-icons/fa';
import {FaPaw} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-dark text-light pt-3">
      <Container>
        <div className="d-flex justify-content-evenly">
        
         {/* REDES SOCIALES */}
        <section className="fs-1"> 
        <a href="#">
         <FaFacebook className="me-3 colorFacebook" variant="primary"/> 
        </a>
        <a href="#">
         <SiInstagram className="me-3 colorInstagram"/>
        </a>
        <a href="#">
        <TfiTwitter className="me-3"/>
        </a>
        <a href="#"className="colorWpp">
       <FaWhatsapp/>
        </a>
        </section>
        </div>
       
        <div className="text-ligh row">
           {/* ITEMS DEL FOOTER */}
          <article className="mt-5 container col-lg-4 col-md-4 col-sm-12 mx-0">
            <h3 className="mb-4">Nosotros</h3>
            <Nav.Link>Quienes somos</Nav.Link>
            <hr />
            <Nav.Link>Contacto</Nav.Link>
            <hr />
            <Nav.Link>Ubicacion</Nav.Link>
            <hr />
            <Nav.Link>Marcas</Nav.Link>
            <hr />
            <Nav.Link>Productos</Nav.Link>
            <hr />
          </article>
          <article className="col-lg-4 col-md-4 col-sm-12 mt-5 ps-sm-5">
            <h3 className="mb-4">Ayuda</h3>
            <Nav.Link>¿Como comprar?</Nav.Link>
            <hr />
            <Nav.Link>Preguntas frecuentes</Nav.Link>
            <hr />
            <Nav.Link>Terminos y condiciones</Nav.Link>
            <hr />
            <Nav.Link>Politica de devolucion</Nav.Link>
            <hr />
          </article>
          <div className="col-lg-4 col-md-4">
          <img src={logo} className="logoFooter mt-5" alt="logo del sitio" />
          <h3 className="text-center mt-3">Amamos lo mismo que vos <FaPaw/></h3>
            
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