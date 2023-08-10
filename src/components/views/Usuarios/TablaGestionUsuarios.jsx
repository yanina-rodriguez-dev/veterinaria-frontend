import React from "react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { obtenerListaUsuarios } from "../../helpers/queries";
import ItemUsuario from "./ItemUsuario";
import Pagination from 'react-bootstrap/Pagination';

const TablaGestionUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);

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

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const usuariosPaginados = usuarios.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h2 className="display-6 titulos">Usuarios</h2>
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
          {usuariosPaginados.map((usuario) => (
            <ItemUsuario
              key={usuario._id}
              usuario={usuario}
              setUsuarios={setUsuarios}
            ></ItemUsuario>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: Math.ceil(usuarios.length / pageSize) }).map(
          (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= usuarios.length}
        />
        <Pagination.Last
          onClick={() => handlePageChange(Math.ceil(usuarios.length / pageSize))}
        />
      </Pagination>
    </section>
  );
};

export default TablaGestionUsuarios;
