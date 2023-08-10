import React from "react";
import avatarImage from "../../../assets/admin.png";
import Button from "react-bootstrap/Button";
import "../../../css/Administrador.css";
import { Link } from "react-router-dom";


const ColumnaIzquierda = () => {
  return (
    <>
      <div className="columna-izquierda">
        <div className="encabezado">
          <h4 className="titulo text-wrap text-break titulos">Administrador</h4>
        </div>
        <div className="contenido">
          <img src={avatarImage} alt="Avatar" className="avatar" />
          <div className="botones">

            <Link
              relative
              to="../"
              className="btn btn-success text-decoration-none text-light my-2"
            >
              Inicio
            </Link>
            <Link
              relative
              to="../admPacientes"
              className="btn btn-success text-decoration-none text-light my-2"
            >
              Pacientes
            </Link>
            <Link
              relative
              to="../admturnos"
              className="btn btn-success text-decoration-none text-light my-2"
            >
              Turnos
            </Link>
            <Link
              relative
              to="../admusuarios"
              className="btn btn-success text-decoration-none text-light my-2"
            >
              Usuarios
            </Link>


          </div>
        </div>
        <span>Version 1.0.1</span>
      </div>
    </>
  );
};

export default ColumnaIzquierda;
