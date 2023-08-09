import { Card, Col, Row } from "react-bootstrap";
import { FaPaw } from "react-icons/fa";
import { FaDog, FaCat, FaKiwiBird } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../css/banner.css"

const Banner = () => {
  return (
    <>
      <section className="bannerContainer text-light my-2">
        <aside>
          <img
            className="img-fluid d-md-none"
            src="https://images.pexels.com/photos/160722/cat-tiger-getiegert-feel-at-home-160722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Imagen banner gatito"
          />
        </aside>
        <aside className="ms-lg-5 d-flex flex-column justify-content-lg-center justify-content-md-end h-100 align-items-center align-items-md-center text-center text-md-start widthBanner">
          <h1 className="fs-1 mt-md-5 mt-2 mt-md-0 mx-2 mx-md-0 fw-bolder">
            ¡Bienvenidos a <br className="d-none d-md-block" /> Huellitas Center!
          </h1>
          <span className="fs-5 mx-2 fw-semibold">
            Donde el cuidado excepcional y <br className="d-none d-md-block" />{" "}
            el cariño incondicional se encuentran!
          </span>
          <div className="button-container">

          <Link to="/nosotros" className="btn btn-primary expand-button btn-lg my-4">
            Ver más <FaPaw  className="ms-2" style={{ transform: "rotate(30deg)" }} />
          </Link>
          </div>
        </aside>
      </section>
      <Row className="mb-5">
        <h1 className="text-center fw-semibold titulos my-5">
          ¡Nos importan tus mascotas!
        </h1>
        <Col xs={12} md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="text-end">
                {" "}
                <FaPaw
                  className="fs-1"
                  style={{ transform: "rotate(30deg)" }}
                />
              </Card.Title>
              <Card.Title className="text-center fw-semibold">
                Perritos{" "}
              </Card.Title>
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
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="text-end">
                {" "}
                <FaPaw
                  className="fs-1"
                  style={{ transform: "rotate(30deg)" }}
                />
              </Card.Title>
              <Card.Title className="text-center fw-semibold">
                Gatitos
              </Card.Title>
              <Card.Text className="mx-lg-5 mx-md-1 mx-5">
                {" "}
                Cuidamos y velamos por la vitalidad de tus adorables felinos. Nuestro equipo de expertos está dedicado a brindarles el máximo bienestar. Puedes confiar en nosotros para mantener a tus gatitos llenos de alegría y en óptimas condiciones.
              </Card.Text>
              <FaCat className="fs-1"></FaCat>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="text-end">
                {" "}
                <FaPaw
                  className="fs-1"
                  style={{ transform: "rotate(30deg)" }}
                />
              </Card.Title>
              <Card.Title className="text-center fw-semibold">
                Animalitos
              </Card.Title>
              <Card.Text className="mx-lg-5 mx-md-1 mx-5">
                {" "}
                Cuidamos y protegemos la vitalidad de tus pequeños amigos. Nuestro equipo experto está comprometido con su bienestar. Confía en nosotros para mantener a tus compañeros pequeños felices y saludables siempre.
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
