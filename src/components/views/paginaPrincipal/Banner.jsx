// import React from 'react'
import { Button, Card, Col, Row } from "react-bootstrap";
import "./banner.css";
import { FaPaw } from "react-icons/fa";
import { FaDog, FaCat, FaKiwiBird } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <section className="bannerContainer my-5 text-light">
        <aside className="d-flex flex-column ms-lg-5 ms-md-3 justify-content-lg-center justify-content-md-end h-100">
          <h1 className="text-light fs-1 mb-4">
            Bienvenidos a <br /> Huellitas Center!
          </h1>
          <span className="fs-5">
            Donde el cuidado excepcional y <br /> el cariño incondicional se
            encuentran!
          </span>
          <Button className="btn btn-lg my-4">
            Ver más <FaPaw style={{ transform: "rotate(30deg)" }} />
          </Button>
        </aside>
      </section>
      <Row className="mb-5">
        <Col xs={12} md={4}>
        <Card  className="">
          <Card.Body>
          <Card.Title className="text-center">Perritos</Card.Title>
          <Card.Text className="mx-5"> Nos dedicamos a cuidar y proteger la salud de tus amigos caninos. Nuestro equipo veterinario altamente capacitado está aquí para brindarles el mejor cuidado posible. Confía en nosotros para mantener a tus perros felices y saludables.  </Card.Text>
          <FaDog className="fs-1"></FaDog>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={4}>
        <Card>
          <Card.Body>
          <Card.Title className="text-center">Gatitos</Card.Title>
          <Card.Text className="mx-5"> Nos dedicamos a cuidar y proteger la salud de tus amigos caninos. Nuestro equipo veterinario altamente capacitado está aquí para brindarles el mejor cuidado posible. Confía en nosotros para mantener a tus perros felices y saludables.</Card.Text>
          <FaCat className="fs-1"></FaCat>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={4}>
        <Card>
          <Card.Body>
          <Card.Title className="text-center">Animalitos</Card.Title>
          <Card.Text className="mx-5"> Nos dedicamos a cuidar y proteger la salud de tus amigos caninos. Nuestro equipo veterinario altamente capacitado está aquí para brindarles el mejor cuidado posible. Confía en nosotros para mantener a tus perros felices y saludables.</Card.Text>
          <FaKiwiBird className="fs-1"></FaKiwiBird>
          </Card.Body>
        </Card>
        </Col>
      </Row>      
    </>
  );
};

export default Banner;
