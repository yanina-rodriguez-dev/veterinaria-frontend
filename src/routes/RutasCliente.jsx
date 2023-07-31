import React from "react";
import { Route, Routes } from "react-router-dom";
import NuevoTurnoUsuario from "../components/views/Turnos/NuevoTurnoUsuario"
const RutasCliente = ({usuarioLogueado, setUsuarioLogueado}) => {
  return (
    <>
    <Routes>
      <Route
        exact
        path="/"
        element={
          <NuevoTurnoUsuario
            usuarioLogueado={usuarioLogueado}
            setUsuarioLogueado={setUsuarioLogueado}
          ></NuevoTurnoUsuario>
        }
      ></Route>
    </Routes>
    </>
  );
};

export default RutasCliente;
