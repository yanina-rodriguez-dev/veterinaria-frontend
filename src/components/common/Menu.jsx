import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../css/Menu.css";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Menu({ usuarioLogueado, setUsuarioLogueado }) {
  const expand = "xl";
  const navegacion = useNavigate();
  const cerrarSesion = () => {
    sessionStorage.removeItem("usuario");
    setUsuarioLogueado({});
    navegacion("/");
  };

  return (
    <>
      <Navbar key={expand} expand={expand} className="fondoMenu mb-3">
        <Container fluid className="d-flex justify-space-between">
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            className="fs-6"
          />
          <Navbar.Brand as={Link} to="/" className="text-center">
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
                <NavLink end className="nav-item nav-link" to="/">
                  Inicio
                </NavLink>
                <hr />
                <NavLink end className="nav-item nav-link" to="/registro">
                  Registro
                </NavLink>
                <hr />
                <NavLink end className="nav-item nav-link" to="/contacto">
                  Contacto
                </NavLink>
                <hr />
                <NavLink end className="nav-item nav-link" to="/nosotros">
                  Nosotros
                </NavLink>
                <hr />
                {usuarioLogueado.nombreUsuario ? (
                  <>
                    <hr />
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/Administrador"
                    >
                      Administrador
                    </NavLink>
                    <hr />
                    <Button variant="info" onClick={cerrarSesion}>
                      LogOut
                    </Button>
                  </>
                ) : (
                  <NavLink end className="nav-item nav-link" to="/Login">
                    Mi cuenta
                  </NavLink>
                )}
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
