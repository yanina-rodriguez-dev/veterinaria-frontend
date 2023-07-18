import React from 'react';
import avatarImage from '../../../assets/admin.jpg';
import '../../../App.css'

const ColumnaIzquierda = () => {
  return (
    <div className="columna-izquierda">
      <div className="encabezado">
        <h4 className="titulo">Administrador</h4>
      </div>
      <div className="contenido">
        <img src={avatarImage} alt="Avatar" className="avatar" />
        <div className="botones">
          <button>Inicio</button>
          <button>Pacientes</button>
          <button>Turnos</button>
        </div>
      </div>
      <div className="salir">
        <button>Salir</button>
      </div>
    </div>
  );
};

export default ColumnaIzquierda;
