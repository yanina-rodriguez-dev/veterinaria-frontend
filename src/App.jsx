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
import CrearPaciente from "./components/views/Pacientes/CrearPaciente";
import EditarPaciente from "./components/views/Pacientes/EditarPaciente";
import AcercaDeNosotros from "./components/views/AcercaDeNosotros";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
            
            path="/administrador/*"
            element={
          
          }
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
