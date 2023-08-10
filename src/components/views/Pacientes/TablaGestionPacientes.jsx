import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { obtenerListaPacientes } from "../../helpers/queries";
import ItemPaciente from "./ItemPaciente";

function TablaGestionPacientes() {
  const pageSize = 3;
  const [pacientes, setPacientes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    obtenerListaPacientes().then((respuesta) => {
      if (respuesta) {
        setPacientes(respuesta);
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
  const pacientesPaginados = pacientes.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h2 className="display-6 titulos">Pacientes</h2>
      </div>
      <Table striped bordered size="sm" responsive className="text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Nombre Mascota</th>
            <th>Especie</th>
            <th>Raza</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientesPaginados.map((paciente) => (
            <ItemPaciente
              key={paciente._id}
              paciente={paciente}
              setPacientes={setPacientes}
            ></ItemPaciente>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: Math.ceil(pacientes.length / pageSize) }).map(
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
          disabled={endIndex >= pacientes.length}
        />
        <Pagination.Last
          onClick={() => handlePageChange(Math.ceil(pacientes.length / pageSize))}
        />
      </Pagination>
    </section>
  );
}

export default TablaGestionPacientes;
