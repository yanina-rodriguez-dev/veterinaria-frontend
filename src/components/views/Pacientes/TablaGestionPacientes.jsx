import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { obtenerListaPacientes } from "../../helpers/queries";
import ItemPaciente from "./ItemPaciente";

function TablaGestionPacientes() {
  const [pacientes, setPacientes] = useState([]);

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

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Pacientes</h1>
      </div>
      <Table striped bordered size="sm" responsive className="text-center">
        <thead>
          <tr>
            <th>#</th>
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
          {pacientes.map((paciente) => (
            <ItemPaciente
              key={paciente.id}
              paciente={paciente}
              setPacientes={setPacientes}
            ></ItemPaciente>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default TablaGestionPacientes;
