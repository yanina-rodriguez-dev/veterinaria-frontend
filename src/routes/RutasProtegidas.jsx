import { Navigate } from "react-router";

const RutasProtegidas = ({ children }) => {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario")) || null;
  console.log(usuarioLogueado);
  if (usuarioLogueado) {
    console.log("aqui entro al primer if");
    if (!usuarioLogueado.esAdmin) {
      console.log("if de cliente");
      return <Navigate to="/login"></Navigate>;
    } else {
      console.log("if de administrador");
      return children;
    }
  }else{
    return <Navigate to="/login"></Navigate>;
  }
};

export default RutasProtegidas;