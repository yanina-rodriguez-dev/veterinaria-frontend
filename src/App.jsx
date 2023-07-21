

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

<Planes></Planes>
<Marcas></Marcas>

      <BrowserRouter>
      <Routes>
        <Route exact path="/Profesionales" element={<Profesionales></Profesionales>} ></Route>
    <Route exact path="/Planes" element={<Profesionales></Profesionales>} ></Route>
    <Route exact path="/Marcas" element={<Profesionales></Profesionales>} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
