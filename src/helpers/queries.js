const URL_usuario = import.meta.env.VITE_API_USUARIOS;
const URL_turno = import.meta.env.VITE_API_TURNOS;
const URL_paciente = import.meta.env.VITE_API_PACIENTES;

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
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
