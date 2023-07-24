const URL_usuario = import.meta.env.VITE_API_USUARIOS;
const URL_turno = import.meta.env.URL_API_TURNOS;
const URL_paciente = import.meta.env.URL_API_PACIENTES;

export const iniciarSesion = async (usuario) => {
  try {
    const respuesta = await fetch(URL_usuario);
    console.log(respuesta);
    console.log(respuesta.status);
    const listaUsuarios = await respuesta.json();
    console.log(listaUsuarios);
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    console.log(usuarioBuscado);
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
