import { useState } from "react";
import { Button, Carousel, Collapse, Container } from "react-bootstrap";
import React from "react";
import perfilfede from "../../assets/perfil-fede.jpg";
import perfilana from "../../assets/perfil-ana.jpg";
import perfilazul from "../../assets/perfil-azul.png";
import perfilmaxi from "../../assets/perfil-maxi.jpg";
import perfilyani from "../../assets/perfil-yani.jpeg";

const AcercaDeNosotros = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-nosotros text-center">
      <div className="mt-5 mb-5">
        <h2 className="f-title">Nuestra mision</h2>
        <>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="mision-collapse-text"
            aria-expanded={open}
            className="btn-background m-3"
          >
            Aqui no hay gato encerrado
          </Button>
          <Collapse in={open}>
            <div id="mision-collapse-text" className="p-2">
              Desarrollamos webs de la mejor calidad, con profesionalismo y
              dedicacion.
            </div>
          </Collapse>
        </>
        <>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="mision-collapse-text"
            aria-expanded={open}
            className="btn-background m-3"
          >
            No somos de caballo grande, ande o no ande
          </Button>
          <Collapse in={open}>
            <div id="mision-collapse-text p-2" className="p-2">
              Valoramos como funciona tu web tanto como se luce.{" "}
            </div>
          </Collapse>
        </>
        <>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="mision-collapse-text"
            aria-expanded={open}
            className="btn-background m-3"
          >
            Hasta al mejor cazador, se le va la liebre
          </Button>
          <Collapse in={open}>
            <div id="mision-collapse-text" className="p-2">
              Aun las personas expertas en ciertas áreas, pueden fallar. Por eso
              nuestro equipo esta continuamente buscando mejorar sus
              habilidades.
            </div>
          </Collapse>
        </>
      </div>
      <h2 className="f-title mt-5">Nuestro equipo</h2>
      <p className="f-text fs-4">
        Conoce al equipo experto en tecnologia que hace posible nuestra web
      </p>
      <Container className="carouselNosotros mt-5">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          showcontrolstouch="true"
          pause={"hover"}
        >
          <Carousel.Item>
            <img
              className="d-block w-100 carouselNosotros"
              src={perfilyani}
              alt="Yanina Rodriguez"
            />
            <Carousel.Caption className="caption">
              <h3 className="text-dark bg-beige">Yanina Rodriguez</h3>
              <p className="text-dark bg-beige"> Scrum master</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselNosotros"
              src={perfilazul}
              alt="Azul De Pol"
            />
            <Carousel.Caption className="caption rounded-5">
              <h3 className="text-dark bg-beige">Azul De Pol</h3>
              <p className="text-dark bg-beige">
                Desarrolladora web fullstack
                <br />
                (Scrum suplente)
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselNosotros"
              src={perfilfede}
              alt="Federico Rueda Leal"
            />
            <Carousel.Caption className="caption">
              <h3 className="text-dark bg-beige">Federico Rueda Leal</h3>
              <p className="text-dark bg-beige">Desarrollador web fullstack</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={perfilana}
              alt="Avatar"
              className="d-block w-100 carouselNosotros"
            />
            <Carousel.Caption className="caption">
              <h3 className="text-dark bg-beige">Ana Santillan</h3>
              <p className="text-dark bg-beige">Desarrolladora web fullstack</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselNosotros"
              src={perfilmaxi}
              alt="Maxi Vega"
            />
            <Carousel.Caption className="caption">
              <h3 className="text-dark bg-beige">Maxi Vega</h3>
              <p className="text-dark bg-beige">Desarrollador web fullstack</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <div className="bg-beige p-2">
        <h2 className="text-verde text-center f-title fs-1 fw-bold mt-5">
          Tecnologias con las que trabajamos
        </h2>
        <div className="container-fluid text-center">
          <a
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png?20140904162625"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ maxWidth: 180, maxHeight: 100 }}
              className="img-fluid p-2"
              src="https://github.com/npm/logos/blob/master/npm%20logo/npm-logo-red.png?raw=true"
              alt="logo de npm"
            ></img>
          </a>
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            <img
              style={{ maxWidth: 250, maxHeight: 100 }}
              className="img-fluid p-2 align-center"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
              alt="logo de React"
            ></img>
          </a>
          <a
            href="https://www.javascript.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ maxWidth: 200, maxHeight: 100 }}
              className="img-fluid p-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
              alt="logo de JavaScript"
            ></img>
          </a>
          <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
            <img
              style={{ maxWidth: 200, maxHeight: 100 }}
              className="img-fluid p-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355"
              alt="logo de Node JS"
            ></img>
          </a>
          <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
            <img
              style={{ maxWidth: 250, maxHeight: 100 }}
              className="img-fluid p-2 align-center"
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png?20170429090805"
              alt="logo de Express"
            ></img>
          </a>
          <a
            href="https://react-bootstrap.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ maxWidth: 150, maxHeight: 100 }}
              className="img-fluid p-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024"
              alt="logo de Bootstrap"
            ></img>
          </a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <img
              style={{ maxWidth: 200, maxHeight: 100 }}
              className="img-fluid p-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png?20190626143224"
              alt="logo de mongoDB"
            ></img>
          </a>
          <a
            href="https://www.postman.com/postman/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ maxWidth: 200, maxHeight: 150 }}
              className="img-fluid p-2"
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png?20211024200826"
              alt="logo de postman"
            ></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AcercaDeNosotros;
