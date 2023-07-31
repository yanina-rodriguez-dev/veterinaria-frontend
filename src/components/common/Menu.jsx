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
import { useState } from "react";

function Menu({ usuarioLogueado, setUsuarioLogueado }) {
  const expand = "xl";
  const navegacion = useNavigate();
  const cerrarSesion = () => {
    sessionStorage.removeItem("usuario");
    setUsuarioLogueado({});
    navegacion("/");
  };
  const [offcanvasShow, setOffcanvasShow] = useState(false); // Estado para controlar el Offcanvas

  const cerrarOffcanvas = () => {
    setOffcanvasShow(false); // Función para cerrar el Offcanvas
  };


  return (
    <>
      <Navbar key={expand} expand={expand} className="fondoMenu mb-3">
        <Container fluid className="d-flex justify-space-between">
        <Navbar.Toggle
            onClick={() => setOffcanvasShow((prev) => !prev)} // Alternar estado del Offcanvas al hacer clic en el botón hamburguesa
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
            show={offcanvasShow} // Asignar el estado del Offcanvas al prop 'show'
            onHide={cerrarOffcanvas} // Llamar a la función para cerrar el Offcanvas al hacer clic fuera del mismo
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
                <NavLink end className="nav-item nav-link" to="/" onClick={cerrarOffcanvas}>
                  Inicio
                </NavLink>
                <hr />
                {usuarioLogueado ? (
                  !usuarioLogueado.esAdmin ? (
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/reservarturno"
                      onClick={cerrarOffcanvas}
                    >
                      Reservar Turno
                    </NavLink>
                  ) : (
                    <NavLink end className="nav-item nav-link" to="/registro" onClick={cerrarOffcanvas}>
                      Registro
                    </NavLink>
                  )
                ) : (
                  <NavLink end className="nav-item nav-link" to="/registro" onClick={cerrarOffcanvas}>
                    Registro
                  </NavLink>
                )}
                <hr />
                <NavLink end className="nav-item nav-link" to="/contacto" onClick={cerrarOffcanvas}>
                  Contacto
                </NavLink>
                <hr />
                <NavLink end className="nav-item nav-link" to="/nosotros" onClick={cerrarOffcanvas}>
                  Nosotros
                </NavLink>
                {usuarioLogueado.email ? (
                  usuarioLogueado.esAdmin ? (
                    <>
                      <hr />
                      <NavLink
                        end
                        className="nav-item nav-link"
                        to="/administrador"
                        onClick={cerrarOffcanvas}
                      >
                        Administrador
                      </NavLink>
                      <hr />
                      <Button variant="info" onClick={()=>{
                        cerrarSesion()
                        cerrarOffcanvas()
                      }}>
                        LogOut
                      </Button>
                    </>
                  ) : (
                    <>
                    <hr />
                      <Button
                        variant="info"
                        onClick={()=>{
                          cerrarSesion()
                          cerrarOffcanvas()
                        }}>
                        LogOut
                      </Button>
                    </>
                  )
                ) : (
                  <>
                  <hr />
                    <NavLink end className="nav-item nav-link" to="/Login" onClick={cerrarOffcanvas}>
                      Mi cuenta
                    </NavLink>
                  </>
                )}
              </Nav>
              <Form className="d-flex mt-3 m-xl-0">
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
