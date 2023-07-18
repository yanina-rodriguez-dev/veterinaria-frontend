import { Container, Nav} from "react-bootstrap";


const Footer = () => {
    return (
        <Container className="bg-dark text-light">
            <div className="fs-1 m-4 pt-3">O</div>
            <div className="text-light ">
              <Nav.Link>Nosotros</Nav.Link>
              <Nav.Link>Contacto</Nav.Link>
              <Nav.Link>Ubicacion</Nav.Link>
              <Nav.Link>Marcas</Nav.Link>
              <Nav.Link>Productos</Nav.Link>
              <Nav.Link>Terminos y condiciones</Nav.Link>
              
                
            </div>
            <article>
                <span></span>
            </article>

            <hr />
        </Container>
    );
};

export default Footer;