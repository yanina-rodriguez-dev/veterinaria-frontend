import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../css/Menu.css";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assets/logo.png";

function Menu() {
  const expand = "xl";

  return (
    <>
      <Navbar key={expand} expand={expand} className="fondoMenu mb-3">
        <Container fluid className="d-flex justify-space-between">
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="fs-6"/>
          <Navbar.Brand href="#" className="text-center">
           
              <img
                src={logo}
                className="logoFooter logoSitio"
                alt="logo del sitio"
              />
           
          </Navbar.Brand>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
            className="fondoMenu"
          >
            <Offcanvas.Header closeButton className="fondoMenu">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
               Huellitas Center
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="fondoMenu">
              <Nav className="justify-content-end flex-grow-1 pe-3 text-center">
                <Nav.Link href="#action1">Inicio</Nav.Link>
                <hr />
                <Nav.Link href="#action1">Mi cuenta</Nav.Link>
                <hr />
                <Nav.Link href="#action2">Productos</Nav.Link>
                <hr />
                <Nav.Link href="#action2">Servicios</Nav.Link>
                <hr />
                <Nav.Link href="#action2">Contacto</Nav.Link>
                <hr />
                <Nav.Link href="#action2">Nosotros</Nav.Link>
                <hr />
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="dark">
                  <AiOutlineSearch className="text-light" />
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
