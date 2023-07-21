import './css/Administrador.css'
import Administrador from './components/views/Administrador'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdmTurnos from './components/views/AdmTurnos';
import AdmPacientes from './components/views/AdmPacientes';
import Inicio from './components/views/Inicio';
// import './App.css'
import './PlanesMarcas.css'
import Marcas from './components/views/PaginaPrincipal/Marcas'
import Planes from './components/views/PaginaPrincipal/Planes'
import './Profesionales.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Profesionales from './components/views/PaginaPrincipal/profesionales';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>} ></Route>
        <Route exact path="/Profesionales" element={<Profesionales></Profesionales>} ></Route>
    <Route exact path="/Planes" element={<Planes></Planes>} ></Route>
    <Route exact path="/Marcas" element={<Marcas></Marcas>} ></Route>
    <Route exact path="/AdmPacientes" element={<AdmPacientes></AdmPacientes>} ></Route>
    <Route exact path="/AdmTurnos" element={<AdmTurnos></AdmTurnos>} ></Route>
    <Route exact path="/Administrador" element={<Administrador></Administrador>} ></Route>
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App
