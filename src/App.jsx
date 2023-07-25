
// import './App.css'
import './PlanesMarcas.css'
import './Error404.css'
import Error404 from './components/views/Error404'
import Marcas from './components/views/PaginaPrincipal/Marcas'
import Planes from './components/views/PaginaPrincipal/Planes'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './components/views/Inicio'

function App() {
 
  return (
    <>
<BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Inicio></Inicio>} ></Route>
        <Route exact path="/*" element={<Error404></Error404>} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
