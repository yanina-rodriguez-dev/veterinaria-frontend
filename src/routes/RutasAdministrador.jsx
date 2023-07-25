import { Route, Routes } from "react-router";
import Administrador from "../components/views/Administrador";
import CrearPaciente from "../components/views/Pacientes/CrearPaciente";
import EditarPaciente from "../components/views/Pacientes/EditarPaciente";
import EditarUsuario from "../components/views/Usuarios/EditarUsuario";
import AdmPacientes from "../components/views/AdmPacientes";
import AdmTurnos from "../components/views/AdmTurnos";
import AdmUsuarios from "../components/views/AdmUsuarios";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador></Administrador>}></Route>
        {/* <Route
            exact
            path="/admturnos/editar-turno"
            element={<EditarTurno></EditarTurno>}
            ></Route>
            <Route
            exact
            path="/admturnos/crear-turno:id"
            element={<Crear-turno></Crear-turno>}
        ></Route> */}
        <Route
          exact
          path="administrador/admpacientes/"
          element={<AdmPacientes></AdmPacientes>}
        ></Route>
        <Route
          exact
          path="administrador/admturnos"
          element={<AdmTurnos></AdmTurnos>}
        ></Route>
        <Route
          exact
          path="administrador/admUsuarios"
          element={<AdmUsuarios></AdmUsuarios>}
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
        <Route
          exact
          path="admpaciente/editar-usuario/:id"
          element={<EditarUsuario></EditarUsuario>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
