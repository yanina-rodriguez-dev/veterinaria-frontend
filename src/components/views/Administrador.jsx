import React from "react";
import TablaTurnos from "./Turnos/TablaTurnos";
import "../../App.css";
import { Link } from "react-router-dom";
const Administrador = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <div className="d-flex">
              <h2>Bienvenido!</h2>
              <hr />
              <div>
                <Link
                  to="admpacientes/"
                  className="btn btn-primary text-decoration-none text-light ms-5 me-5"
                >
                  Pacientes
                </Link>
                <Link
                  to="admturnos/"
                  className="btn btn-primary text-decoration-none text-light ms-5 me-5"
                >
                  Turnos
                </Link>
                <Link
                  to="admusuarios/"
                  className="btn btn-primary text-decoration-none text-light ms-5 me-5"
                >
                  Usuarios
                </Link>
              </div>
            </div>
            <p>Estos son los turnos reservados de los próximos días:</p>
            <TablaTurnos />
          </div>
        </div>
      </div>
    </>
  );
};

export default Administrador;
