import { Route, Routes } from "react-router";
import Administrador from "../components/views/Administrador";
import CrearPaciente from "../components/views/Pacientes/CrearPaciente";
import EditarPaciente from "../components/views/Pacientes/EditarPaciente";
import AdmPacientes from "../components/views/AdmPacientes";
import AdmTurnos from "../components/views/AdmTurnos";
import EditarTurno from "../components/views/Turnos/EditarTurno";
import CrearTurno from "../components/views/Turnos/CrearTurno"

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador></Administrador>}></Route>
        <Route
            exact
            path="admturnos/editar-turno/:id"
            element={<EditarTurno></EditarTurno>}
            ></Route>
            <Route
            exact
            path="admturnos/crear-turno"
            element={<CrearTurno></CrearTurno>}
        ></Route>
        <Route
          exact
          path="/admpacientes"
          element={<AdmPacientes></AdmPacientes>}
        ></Route>
        <Route
          exact
          path="/admturnos"
          element={<AdmTurnos></AdmTurnos>}
        ></Route>
        <Route
          exact
          path="admpacientes/crear-paciente"
          element={<CrearPaciente></CrearPaciente>}
        ></Route>
        <Route
          exact
          path="admpaciente/editar-paciente/:id"
          element={<EditarPaciente></EditarPaciente>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
