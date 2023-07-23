import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Administrador.css";
import "./App.css";
import "./Profesionales.css";
import "./PlanesMarcas.css";
import "./Profesionales.css";
import "./css/Registro.css";
import Inicio from "./components/views/Inicio";
import Contacto from "./components/views/Contacto";
import Login from "./components/views/Login";
import Registro from "./components/views/Registro";
import Administrador from "./components/views/Administrador";
import Menu from "./components/common/Menu";
import AdmTurnos from "./components/views/AdmTurnos";
import AdmPacientes from "./components/views/AdmPacientes";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>

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
            path="/administrador"
            element={<Administrador></Administrador>}
          ></Route>
          <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
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
