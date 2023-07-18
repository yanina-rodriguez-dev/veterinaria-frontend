import React from 'react';
import TablaTurnos from './Turnos/TablaTurnos';
import ColumnaIzquierda from './Turnos/Columna';
import '../../App.css';

const Administrador = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <img src={avatarImage} alt="Avatar" className="avatar" />
          <h4>Administrador</h4>
          <div className="botones">
            <button>Inicio</button>
            <button>Turnos</button>
            <button>Pacientes</button>
          </div>
        </div>
        <div className="col-10">
          <div>
            <h2>Bienvenido!</h2>
            <hr />
            <p>Estos son los turnos reservados de los próximos días:</p>
          </div>
          <TablaTurnos />
        </div>
      </div>
    </div>
  );
};

export default Administrador;
