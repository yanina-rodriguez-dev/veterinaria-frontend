import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../css/menu.css";
import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

function Menu({ usuarioLogueado, setUsuarioLogueado }) {
  const expand = "xl";
  const navegacion = useNavigate();
  const cerrarSesion = () => {
    Swal.fire({
      title: "¿Estas seguro que quieres cerrar sesion?",
      text: "No podras revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cerrar sesión.",
      cancelButtonText: "Cancelar.",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "¡Sesión cerrada!",
          "Tu sesión finalizó correctamente.",
          "success"
        );
        sessionStorage.removeItem("usuario");
        setUsuarioLogueado({});
        navegacion("/");
      }
    });
  };
  const [offcanvasShow, setOffcanvasShow] = useState(false); 

  const cerrarOffcanvas = () => {
    setOffcanvasShow(false); 
  };

  return (
    <>
      <Navbar key={expand} expand={expand} className="fondoMenu titulos">
        <Container fluid className="d-flex justify-space-between">
          <Navbar.Toggle
            onClick={() => setOffcanvasShow((prev) => !prev)} 
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            className="fs-6"
          />
          <Navbar.Brand as={Link} to="/" className="text-center">
            <img
              src={logo}
              className="logoMenu logoSitio"
              alt="logo del sitio"
            />
          </Navbar.Brand>
          <Navbar.Offcanvas
            show={offcanvasShow}
            onHide={cerrarOffcanvas}
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
            className="fondoMenu"
          >
            <Offcanvas.Header closeButton className="fondoMenu">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="fw-bold">
                Huellitas Center
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="fondoMenu">
              <Nav className="justify-content-end flex-grow-1 pe-3 text-center">
                <NavLink
                  end
                  className="nav-item nav-link fw-bold"
                  to="/"
                  onClick={cerrarOffcanvas}
                >
                  Inicio
                </NavLink>
                <hr />
                {usuarioLogueado.email ? (
                  !usuarioLogueado.esAdmin ? (
                    <NavLink
                      end
                      className="nav-item nav-link fw-bold"
                      to="/reservarturno"
                      onClick={cerrarOffcanvas}
                    >
                      Reservar Turno
                    </NavLink>
                  ) : (
                    <NavLink
                      end
                      className="nav-item nav-link fw-bold"
                      to="/registro"
                      onClick={cerrarOffcanvas}
                    >
                      Registro
                    </NavLink>
                  )
                ) : (
                  <NavLink
                    end
                    className="nav-item nav-link fw-bold"
                    to="/registro"
                    onClick={cerrarOffcanvas}
                  >
                    Registro
                  </NavLink>
                )}
                <hr />
                <NavLink
                  end
                  className="nav-item nav-link fw-bold"
                  to="/contacto"
                  onClick={cerrarOffcanvas}
                >
                  Contacto
                </NavLink>
                <hr />
                <NavLink
                  end
                  className="nav-item nav-link fw-bold"
                  to="/nosotros"
                  onClick={cerrarOffcanvas}
                >
                  Nosotros
                </NavLink>
                {usuarioLogueado.email ? (
                  usuarioLogueado.esAdmin ? (
                    <>
                      <hr />
                      <NavLink
                        end
                        className="nav-item nav-link fw-bold"
                        to="/administrador"
                        onClick={cerrarOffcanvas}
                      >
                        Administrador
                      </NavLink>
                      <hr />
                      <Button
                        variant="info"
                        onClick={() => {
                          cerrarSesion();
                          cerrarOffcanvas();
                        }}
                      >
                        LogOut
                      </Button>
                    </>
                  ) : (
                    <>
                      <hr />
                      <Button
                        variant="info"
                        onClick={() => {
                          cerrarSesion();
                          cerrarOffcanvas();
                        }}
                      >
                        LogOut
                      </Button>
                    </>
                  )
                ) : (
                  <>
                    <hr />
                    <NavLink
                      end
                      className="nav-item nav-link fw-bold"
                      to="/Login"
                      onClick={cerrarOffcanvas}
                    >
                      Mi cuenta
                    </NavLink>
                    <hr /> <br />
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
