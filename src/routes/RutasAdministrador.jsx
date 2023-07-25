import { Route, Routes } from "react-router";
import Administrador from "../components/views/Administrador";


const RutasAdministrador = () => {
    return (
        <>
         <Route
            exact
            path="/"
            element={<Administrador></Administrador>}
          ></Route>
             <Route
            exact
            path="/administrador/admPacientes"
            element={<AdmPacientes></AdmPacientes>}
          ></Route>
          <Route
            exact
            path="/administrador/admTurnos"
            element={<AdmTurnos></AdmTurnos>}
          ></Route>
          <Route
            exact
            path="/crear-paciente"
            element={<CrearPaciente></CrearPaciente>}
          ></Route>
          <Route
            exact
            path="/editar-paciente/:id"
            element={<EditarPaciente></EditarPaciente>}
          ></Route>
        </>
    );
};

export default RutasAdministrador;