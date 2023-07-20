import React from "react";

const Error404 = () => {
  return (
      <section className="error d-flex flex-wrap align-items-center justify-content-center">
          <iframe
            src="https://giphy.com/embed/0pPII0x2YJsUTHU5OT"
            width="480"
            height="270"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            ></iframe>
          <p>
            <a href="https://giphy.com/gifs/paws-dog-walking-pawprints-0pPII0x2YJsUTHU5OT"></a>
          </p>
            <h1 className="f-title">Error 404</h1>
            <h2 className="f-text">No quedan huellas de la pagina que estabas buscando...</h2>
      </section>
  );
};

export default Error404;
