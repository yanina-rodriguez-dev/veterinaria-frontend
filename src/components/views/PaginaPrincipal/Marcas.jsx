const Marcas = () => {
    return (
      <section className="flex-grow-1">
        <div className="pt-5 my-5">
          <h2 className="text-center f-text fs-1 fw-bold titulos mb-5">
            Trabajamos con las mejores marcas en el mercado
          </h2>
          <div className="container-fluid text-center">
          <a href="https://www.pedigree.com.ar/" target="_blank" rel="noreferrer"> 
          <img
            style={{ maxWidth: 225, maxHeight: 100 }}
            className="img-fluid p-2"
            src="https://logos-download.com/wp-content/uploads/2017/12/Pedigree_logo.png"
            alt="logo pedigree"
            ></img>
          </a>
            <a href="https://www.royalcanin.com/ar" target="_blank" rel="noreferrer"> 
            <img
            style={{ maxWidth: 250, maxHeight: 100 }}
            className="img-fluid p-2 align-center"
            src="https://logos-download.com/wp-content/uploads/2016/12/Royal_Canin_logo_logotipo.png"
            alt="logo-royal-canin"
            ></img>
            </a>
            <a href="https://www.purina.com.ar/home" target="_blank" rel="noreferrer"> 
          <img
            style={{ maxWidth: 250, maxHeight: 100 }}
            className="img-fluid p-2"
            src="https://logos-download.com/wp-content/uploads/2016/10/Purina_logo.png"
            alt="logo-purina"
            ></img>
            </a>
            <a href="https://www.whiskas.com.ar/" target="_blank" rel="noreferrer"> 
          <img
            style={{ maxWidth: 200, maxHeight: 100 }}
            className="img-fluid p-2"
            src="https://logodownload.org/wp-content/uploads/2017/04/whiskas-logo.png"
            alt="logo-whiskas"
            ></img>
            </a>
            <a href="https://www.nutrique.com.ar/conocenutrique" target="_blank" rel="noreferrer"> 
          <img
            style={{ maxWidth: 200, maxHeight: 100 }}
            className="img-fluid p-2"
            src="http://nutrique.com.ar/email-handler/form_modal_assets/images/logo.png"
            alt="logo-nutrique"
            ></img>
            </a>  
         <a href="https://www.eukanuba.com/ar" target="_blank" rel="noreferrer">
          <img
            style={{ maxWidth: 300, maxHeight: 150}}
            className="img-fluid p-2"
            src="https://logoeps.com/wp-content/uploads/2012/12/eukanuba-logo-vector.png"
            alt="logo-eukanuba"
          ></img>
          </a>
            </div>
        </div>
      </section>
    );
  };
  
  export default Marcas;