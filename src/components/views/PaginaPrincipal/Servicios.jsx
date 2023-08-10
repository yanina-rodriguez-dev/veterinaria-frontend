const Servicios = () => {
    return (
        <section className="mainSection">
            <h1 className="ms-4 mt-3 titulos text-center">Servicios que ofrecemos en nuestra Veterinaria</h1>
            <article className="contenedorServicios">
                <div className="contenedor-imagen">
                    <img className="imagenServicios"
                        src="https://images.unsplash.com/photo-1611173622933-91942d394b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="Servicio-Peluqueria" />
                        <span className="textoServicio">Peluquería</span>
                </div>
                <div className="contenedor-imagen">
                    <img className="imagenServicios" src="https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="Servicio-Vacunacion" />
                    <span className="textoServicio">Vacunación</span>
                </div>
                <div className="contenedor-imagen">
                    <img className="imagenServicios" src="https://plus.unsplash.com/premium_photo-1677165324281-3497b194c168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Servicio-Veterinario" />
                    <span className="textoServicio">Veterinario</span>
                </div>
                <div className="contenedor-imagen">
                    <img className="imagenServicios" src="https://plus.unsplash.com/premium_photo-1663045852526-adc089e870d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Servicio-Oftalmologico " />
                    <span className="textoServicio">Oftalmólogo</span>
                </div>
                <div className="contenedor-imagen">
                    <img className="imagenServicios" src="https://plus.unsplash.com/premium_photo-1664304200289-be5b07afe66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Servicio-Clinica" />
                    <span className="textoServicio">Clínica</span>
                </div>
                <div className="contenedor-imagen">
                    <img className="imagenServicios" src="https://images.pexels.com/photos/6235653/pexels-photo-6235653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Servicio-Ecografias" />
                    <span className="textoServicio">Ecografías</span>
                </div>
                <div className="contenedor-imagen">
                    <img className="imagenServicios" src="https://images.pexels.com/photos/9341729/pexels-photo-9341729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Servicio_Nutricion" />
                    <span className="textoServicio">Nutrición</span>
                </div>
                <div className="contenedor-imagen">
                    <img className="imagenServicios" src="https://images.pexels.com/photos/7121954/pexels-photo-7121954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Servicio_Cirugia" />
                    <span className="textoServicio">Cirugía</span>
                </div>
            </article>
        </section>
    );
};

export default Servicios;