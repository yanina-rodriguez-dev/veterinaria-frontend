import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/Administrador.css";
import "./AcercaDe.css";
import "./PlanesMarcas.css";
import "./css/Registro.css";
import "./Profesionales.css";
import "./Servicios.css";
import Inicio from "./components/views/Inicio";
import Contacto from "./components/views/Contacto";
import Login from "./components/views/Login.jsx";
import Registro from "./components/views/Registro";
import Administrador from "./components/views/Administrador.jsx";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import AdmTurnos from "./components/views/AdmTurnos";
import AdmPacientes from "./components/views/AdmPacientes";
import Marcas from "./components/views/PaginaPrincipal/Marcas";
import Planes from "./components/views/PaginaPrincipal/Planes";
import Profesionales from "./components/views/PaginaPrincipal/profesionales";
import CrearPaciente from "./components/views/Pacientes/CrearPaciente";
import EditarPaciente from "./components/views/Pacientes/EditarPaciente";
import AcercaDeNosotros from "./components/views/AcercaDeNosotros";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdmUsuarios from "./components/views/admUsuarios";
import EditarUsuario from "./components/views/Usuarios/EditarUsuario";

function App() {
  const usuarioSessionStorage =
    JSON.parse(sessionStorage.getItem("usuario")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSessionStorage);

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          {/* <Route exact path="/contacto" element={<Contacto></Contacto>}></Route> */}
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
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
            path="/administrador/admUsuarios"
            element={<AdmUsuarios/>}
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
          <Route
            exact
            path="/editar-usuario/:id"
            element={<EditarUsuario></EditarUsuario>}
          ></Route>
          <Route
            exact
            path="/administrador"
            element={<Administrador></Administrador>}
          ></Route>
          <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
          <Route
            exact
            path="/nosotros"
            element={<AcercaDeNosotros></AcercaDeNosotros>}
          ></Route>
          {/* <Route  path="*" element={<Error404></Error404>}></Route> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;

// json server comando
// json-server --watch db.json --port 3004
