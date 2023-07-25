import React from 'react';
import avatarImage from '../../../assets/admin.png';
import Button from 'react-bootstrap/Button';
import '../../../css/Administrador.css'


const ColumnaIzquierda = () => {
  return (
    <>    
    <div className="columna-izquierda">
      <div className="encabezado">
        <h4 className="titulo text-wrap text-break">Administrador</h4>
      </div>
      <div className="contenido">
        <img src={avatarImage} alt="Avatar" className="avatar" />
        <div className="botones">
        <Button variant="success" className='m-2'>Inicio</Button>
        <Button variant="success" className='m-2'>Actividades</Button>
        <Button variant="success" className='m-2'>Balance</Button>
        <Button variant="success" className='m-2'>Configuracion</Button>
        </div>
      </div>
      <div className="salir mb-5">
      <Button variant="success">Salir</Button>
      </div>
      <span>Version 1.0.1</span>
    </div>
    </>
  );
};

export default ColumnaIzquierda;