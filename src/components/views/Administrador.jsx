import React from 'react';
import TablaTurnos from './Turnos/TablaTurnos';
import ColumnaIzquierda from './Turnos/Columna';
import '../../App.css';

const Administrador = () => {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-sm-2 d-none d-sm-block columna-izquierda">
          <ColumnaIzquierda></ColumnaIzquierda>
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
