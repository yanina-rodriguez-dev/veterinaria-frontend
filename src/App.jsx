
import './Profesionales.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Profesionales from './components/views/PaginaPrincipal/profesionales';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/Profesionales" element={<Profesionales></Profesionales>} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
