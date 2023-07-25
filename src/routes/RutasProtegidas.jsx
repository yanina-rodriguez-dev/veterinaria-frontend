import { Navigate } from "react-router";

const RutasProtegidas = ({ children }) => {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario")) || null;
  console.log(usuarioLogueado);
  if (!usuarioLogueado.esAdmin) {
    return <Navigate to="/login"></Navigate>;
  } else {
    return children;
  }
};

export default RutasProtegidas;