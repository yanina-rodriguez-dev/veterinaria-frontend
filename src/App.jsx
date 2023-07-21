import Menu from "./components/common/Menu";
import "./App.css";
import "./css/Administrador.css";
import Administrador from "./components/views/Administrador";
import "bootstrap/dist/css/bootstrap.min.css";
import AdmTurnos from "./components/views/AdmTurnos";
import AdmPacientes from "./components/views/AdmPacientes";
import "./PlanesMarcas.css";
import Marcas from "./components/views/PaginaPrincipal/Marcas";
import Planes from "./components/views/PaginaPrincipal/Planes";
import "./Profesionales.css";
import Profesionales from "./components/views/PaginaPrincipal/profesionales";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route  element={<Menu></Menu>}></Route>
        <Routes>
          <Route
            exact
            path="/Profesionales"
            element={<Profesionales></Profesionales>}
          ></Route>
          <Route
            exact
            path="/Profesionales"
            element={<Profesionales></Profesionales>}
          ></Route>
          <Route exact path="/Planes" element={<Planes></Planes>}></Route>
          <Route exact path="/Marcas" element={<Marcas></Marcas>}></Route>
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
