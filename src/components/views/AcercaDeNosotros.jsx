import { useState } from 'react';
import {Button, Carousel, Collapse} from 'react-bootstrap';
import React from 'react';

const AcercaDeNosotros = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    const [open, setOpen] = useState(false);

  return (
    <section className='bg-nosotros text-center'>
        <div className="mt-5 mb-5">
            <h2 className="f-title">Nuestra mision</h2>
            <>
            <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
     className='btn-background m-3'
      >
       Aqui no hay gato encerrado
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
      Desarrollamos webs de la mejor calidad, con profesionalismo y dedicacion.
        </div>
      </Collapse>
      </>
            <>
            <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
     className='btn-background m-3'
      >
  No somos de caballo grande, ande o no ande
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
Valoramos como funciona tu web tanto como se luce.  </div>
      </Collapse>
      </>
            <>
            <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
     className='btn-background m-3'
      >
  Hasta al mejor cazador, se le va la liebre
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        Aun las personas expertas en ciertas áreas, pueden fallar.
Por eso nuestro equipo esta continuamente buscando mejorar sus habilidades.
        </div>
      </Collapse>
      </>
        </div>
        {/* <br />
        <br /> */}
            <h2 className="f-title mt-5">Nuestro equipo</h2>
            <p className="f-text">Conoce al equipo experto en tecnologia que hace posible nuestra web</p>
        <div className="carousel mt-5 text-center">
{/* <Container> */}
    <Carousel activeIndex={index} onSelect={handleSelect} showControls touch={true} pause={"hover"} className="text-center object-fit-cover">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://nesflismovies.netlify.app/assets/aboutusimg/integrantes/perfil-Yani.jpeg"
          alt="Yanina Rodriguez"
        />
        <Carousel.Caption className="caption">
          <h3>Yanina Rodriguez</h3>
          <p>Scrum master</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src='https://trello.com/1/cards/64b330ed817877cd701c5264/attachments/64b9197efd57275413462389/previews/64b9197ffd572754134624f4/download/image.png'
          alt="Azul De Pol"
        />

        <Carousel.Caption className="caption rounded-5">
          <h3>Azul De Pol</h3>
          <p>Desarrolladora web fullstack 
            <br />(Scrum suplente)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{maxHeight:900}}
          className="d-block w-100 carousel"
          src="https://avatars.githubusercontent.com/u/107441302?v=4"
          alt="Federico Rueda Leal"
        />

        <Carousel.Caption className="caption">
          <h3>Federico Rueda Leal</h3>
          <p>
          Desarrollador web fullstack          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{maxHeight:400, maxWidth:500}}
          className="d-block w-100 carousel"
          src="https://helphome.netlify.app/img/avatar4A.png"
          alt="Ana Santillan"
        />

        <Carousel.Caption className="caption">
          <h3>Ana Santillan</h3>
          <p>
          Desarrolladora web fullstack          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://nesflismovies.netlify.app/assets/aboutusimg/integrantes/perfil-Maxi.JPG"
          alt="Maxi Vega"
        />

        <Carousel.Caption className="caption">
          <h3>Maxi Vega</h3>
          <p>
          Desarrollador web fullstack          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* </Container> */}
</div>
    </section>
  );
}

export default AcercaDeNosotros;