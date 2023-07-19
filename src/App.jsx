import './css/Registro.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from './components/views/Registro';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/Registro" element={<Registro></Registro>} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
