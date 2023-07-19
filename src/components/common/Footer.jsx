import { Container, Nav} from "react-bootstrap";
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="bg-dark text-light pt-3">
            <Container>
            <div className="logoFooter pt-3 text-center"><img src={logo} className="logoFooter " alt="logo" /></div>
            <div className="text-light ">
                <aside className="mt-5 container text-center">
              <Nav.Link>Nosotros</Nav.Link>
              <hr />
              <Nav.Link>Contacto</Nav.Link>
              <hr />
              <Nav.Link>Ubicacion</Nav.Link>
              <hr />
              <Nav.Link>Marcas</Nav.Link>
              <hr />
              <Nav.Link>Productos</Nav.Link>
              <hr />
              <Nav.Link>Terminos y condiciones</Nav.Link>
                </aside>
              
                
            </div>
            <article>
                <span></span>
            </article>

            <hr />
            </Container>
           
        </div>
    );
};

export default Footer;