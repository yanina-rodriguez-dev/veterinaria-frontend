// import React from 'react'
import { Button } from "react-bootstrap";
import './banner.css'
import { FaPaw } from "react-icons/fa"; 

const Banner = () => {
    return (
        <>
        <section className="bannerContainer my-5 text-light">
          <aside className="d-flex flex-column ms-lg-5 ms-md-3 justify-content-lg-center justify-content-md-end h-100">
              <h1 className="text-light fs-1 mb-4">
                  Bienvenidos a <br /> Huellitas Center!
              </h1>
              <span className="fs-5">Donde el cuidado excepcional y <br /> el cariño incondicional se encuentran!</span>
              <Button className="btn btn-lg my-4">Ver más <FaPaw style={{ transform: 'rotate(30deg)' }} /></Button>
          </aside>
      </section>
      <div className="vh-100"></div>
      </>
    );
};

export default Banner;