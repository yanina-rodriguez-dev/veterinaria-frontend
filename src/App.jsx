import "./css/Administrador.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Footer from "./components/common/Footer";
// import Login from "./components/views/Login";
import "./App.css";
import "./Profesionales.css";
import "./PlanesMarcas.css";
import "./Profesionales.css";
    import './css/Registro.css'
    import Registro from './components/views/Registro';
import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";
import Menu from "./components/common/Menu";
import AdmTurnos from "./components/views/AdmTurnos";
import AdmPacientes from "./components/views/AdmPacientes";
import Marcas from "./components/views/PaginaPrincipal/Marcas";
import Planes from "./components/views/PaginaPrincipal/Planes";
import Profesionales from "./components/views/PaginaPrincipal/profesionales";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Route element={<Menu></Menu>}></Route> */}
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
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
