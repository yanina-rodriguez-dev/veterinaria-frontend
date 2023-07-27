import { Navigate } from "react-router";

const RutasProtegidas = ({ children }) => {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario")) || null;
  if (usuarioLogueado) {
    if (!usuarioLogueado.esAdmin) {
      return <Navigate to="/login"></Navigate>;
    } else {
      return children;
    }
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default RutasProtegidas;
