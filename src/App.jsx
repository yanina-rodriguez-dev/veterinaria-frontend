import './Servicios.css'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Servicios from './components/views/PaginaPrincipal/Servicios';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/Servicios" element={<Servicios></Servicios>} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
