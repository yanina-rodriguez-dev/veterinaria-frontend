import React from 'react';
import TablaGestionPacientes from './Pacientes/TablaGestionPacientes';
import ColumnaIzquierda from './Turnos/Columna';
import '../../css/Administrador.css';
import Button from 'react-bootstrap/Button';


const AdmPacientes = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
      <div className="col-sm-2 d-none d-sm-block columna-izquierda">
          <ColumnaIzquierda></ColumnaIzquierda>
        </div>
        <div className="col-10">
          <div>
            <h2>Administrar Pacientes:</h2>
            <hr />
            <p>Gestiona los pacientes:</p>
          </div>
          
          <TablaGestionPacientes />
        </div>
      </div>
    </div>
    </>
  );
};

export default AdmPacientes;