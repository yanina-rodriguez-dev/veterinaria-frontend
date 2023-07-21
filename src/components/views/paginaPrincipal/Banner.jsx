// import React from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import "./banner.css";
import { FaPaw } from "react-icons/fa";
import { FaDog, FaCat, FaKiwiBird } from "react-icons/fa";


const Banner = () => {
  return (
    <>
      <section className="bannerContainer my-5 text-light">
        <aside>
        <img
          className="img-fluid d-md-none"
          src="https://images.pexels.com/photos/160722/cat-tiger-getiegert-feel-at-home-160722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Imagen banner gatito"
        />
        </aside>
        <aside className=" mt-lg-5 ms-md-3 ms-lg-5 d-flex flex-column justify-content-lg-center justify-content-md-end h-100 align-items-center align-items-md-start text-center text-md-start">
          <h1 className="fs-1 mb-md-4 mt-2 mt-md-0 mx-2 mx-md-0">
            Bienvenidos a <br className="d-none d-md-block" /> Huellitas Center!
          </h1>
          <span className="fs-5 mx-2 ">
            Donde el cuidado excepcional y <br className="d-none d-md-block" /> el cariño incondicional se
            encuentran!
          </span>
          <Button className="btn btn-lg my-4">
            Ver más <FaPaw style={{ transform: "rotate(30deg)" }} />
          </Button>
        </aside>
      </section>
      <Row className="mb-5">
        <Col xs={12} md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-end">
                {" "}
                <FaPaw
                  className="fs-1"
                  style={{ transform: "rotate(30deg)" }}
                />
              </Card.Title>
              <Card.Title className="text-center">Perritos </Card.Title>
              <Card.Text className="mx-lg-5 mx-md-1 mx-5">
                {" "}
                Nos dedicamos a cuidar y proteger la salud de tus amigos
                caninos. Nuestro equipo veterinario altamente capacitado está
                aquí para brindarles el mejor cuidado posible. Confía en
                nosotros para mantener a tus perros felices y saludables.{" "}
              </Card.Text>
              <FaDog className="fs-1"></FaDog>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-end">
                {" "}
                <FaPaw
                  className="fs-1"
                  style={{ transform: "rotate(30deg)" }}
                />
              </Card.Title>
              <Card.Title className="text-center">Gatitos</Card.Title>
              <Card.Text className="mx-lg-5 mx-md-1 mx-5">
                {" "}
                Nos dedicamos a cuidar y proteger la salud de tus amigos
                caninos. Nuestro equipo veterinario altamente capacitado está
                aquí para brindarles el mejor cuidado posible. Confía en
                nosotros para mantener a tus perros felices y saludables.
              </Card.Text>
              <FaCat className="fs-1"></FaCat>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title className="text-end">
                {" "}
                <FaPaw
                  className="fs-1"
                  style={{ transform: "rotate(30deg)" }}
                />
              </Card.Title>
              <Card.Title className="text-center">Animalitos</Card.Title>
              <Card.Text className="mx-lg-5 mx-md-1 mx-5">
                {" "}
                Nos dedicamos a cuidar y proteger la salud de tus amigos
                caninos. Nuestro equipo veterinario altamente capacitado está
                aquí para brindarles el mejor cuidado posible. Confía en
                nosotros para mantener a tus perros felices y saludables.
              </Card.Text>
              <FaKiwiBird className="fs-1"></FaKiwiBird>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Banner;
