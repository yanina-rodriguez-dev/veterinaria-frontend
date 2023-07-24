import "./css/Administrador.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Profesionales.css";
import "./PlanesMarcas.css";
import "./Profesionales.css";
import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";
import Menu from "./components/common/Menu";
import AdmTurnos from "./components/views/AdmTurnos";
import AdmPacientes from "./components/views/AdmPacientes";
import Marcas from "./components/views/PaginaPrincipal/Marcas";
import Planes from "./components/views/PaginaPrincipal/Planes";
import Contacto from "./components/views/Contacto";
import Profesionales from "./components/views/PaginaPrincipal/profesionales";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CrearPaciente from "./components/views/Pacientes/CrearPaciente";
import EditarPaciente from "./components/views/Pacientes/EditarPaciente";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Route element={<Menu></Menu>}></Route> */}
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          {/* <Route exact path="/contacto" element={<Contacto></Contacto>}></Route> */}
          <Route
            exact
            path="/Profesionales"
            element={<Profesionales></Profesionales>}
          ></Route>
          {/* <Route exact path="/Planes" element={<Planes></Planes>}></Route> */}
          {/* <Route exact path="/Marcas" element={<Marcas></Marcas>}></Route> */}
          <Route
            exact
            path="/AdmPacientes"
            element={<AdmPacientes></AdmPacientes>}
          ></Route>
          <Route
            exact
            path="/AdmTurnos"
            element={<AdmTurnos></AdmTurnos>}
          ></Route>
          <Route exact path="/crear-paciente" 
                element={<CrearPaciente></CrearPaciente>} ></Route>
          <Route exact path="/editar-paciente/:id" 
                element={<EditarPaciente></EditarPaciente>} ></Route>
          <Route
            exact
            path="/Administrador"
            element={<Administrador></Administrador>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
