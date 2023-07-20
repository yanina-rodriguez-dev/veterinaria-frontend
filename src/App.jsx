import './css/Contacto.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Contacto from './components/views/Contacto';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/Contacto" element={<Contacto></Contacto>} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
