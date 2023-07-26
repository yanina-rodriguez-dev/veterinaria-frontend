import TablaGestionTurnos from './Turnos/TablaGestionTurnos';
import React from 'react';
import ColumnaIzquierda from './Turnos/Columna';
import '../../css/Administrador.css';
import Button from 'react-bootstrap/Button';


const AdmTurnos = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
      <div className="col-sm-2 d-none d-sm-block columna-izquierda">
          <ColumnaIzquierda></ColumnaIzquierda>
        </div>
        <div className="col-10">
          <div>
            <h2>Administrar Turnos:</h2>
            <hr />
            <p>Gestiona los turnos:</p>
          </div>
          <Button variant="success" className='m-2'>Nuevo Turno</Button>
          <TablaGestionTurnos />
        </div>
      </div>
    </div>
    </>
  );
};

export default AdmTurnos;
