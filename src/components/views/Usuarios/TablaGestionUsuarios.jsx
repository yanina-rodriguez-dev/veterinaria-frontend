import React from "react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { obtenerListaUsuarios } from "../../helpers/queries";
import ItemUsuario from "./ItemUsuario";

const TablaGestionUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obtenerListaUsuarios().then((respuesta) => {
      if (respuesta) {
        setUsuarios(respuesta);
      } else {
        Swal.fire(
          "Error",
          "Intente realizar esta operación en unos minutos",
          "error"
        );
      }
    });
  }, []);

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h2 className="display-6 ">Usuarios</h2>
      </div>
      <Table striped bordered size="sm" responsive className="text-center">
        <thead>
          <tr>
            <th>Rol</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>DNI</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <ItemUsuario
              key={usuario._id}
              usuario={usuario}
              setUsuarios={setUsuarios}
            ></ItemUsuario>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default TablaGestionUsuarios;
