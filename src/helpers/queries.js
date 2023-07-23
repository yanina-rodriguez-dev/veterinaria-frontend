const URL_usuario = import.meta.env.URL_API_USUARIOS;
const URL_turno = import.meta.env.URL_API_USUARIOS;
const URL_paciente = import.meta.env.URL_API_USUARIOS;

export const iniciarSesion = async (usuario) => {
  try {
    const respuesta = await fetch(URL_usuario);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      } else {
        console.log("password incorrecto");
      }
    } else {
      console.log("el email no existe");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
