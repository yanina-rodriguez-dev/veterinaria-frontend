import { Navigate } from "react-router";

const RutasProtegidasCliente = ({ children }) => {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario")) || null;
  if (usuarioLogueado) {
    if (!usuarioLogueado.esAdmin) {
        return children;
    } else {
        return <Navigate to="/login"></Navigate>;
    }
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default RutasProtegidasCliente;
