// import React from 'react'
import { Button, Container } from "react-bootstrap";
import './banner.css'
import { FaPaw } from "react-icons/fa"; 

const Banner = () => {
    return (
        <>
         <Container className="" >
        <div className="banner-container">
        <div className="background-image">
          <img src="https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gatito" />
        </div>
        <div className="content">
          <h1>Bienvenidos a Huellitas Center</h1>
          <p>Donde el cuidado excepcional y el cariño incondicional se encuentran!</p>
          <Button>Ver más <FaPaw></FaPaw></Button>
        </div>
      </div>
         </Container>
      </>
    );
};

export default Banner;