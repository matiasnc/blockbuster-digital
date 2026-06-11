import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productos } from "../data/productos";
import imagenPrincipal from "../assets/imagenPrincipal.jpeg";
import TarjetaPelicula from '../components/TarjetaPelicula';

function Inicio() {
  return (
    <>{/*esto es React.Fragment, se utiliza para agrupar varias secciones sin agregar un div extra.*/}
      {/* 
        Sección principal de bienvenida.
      */}
      <section className="bg-dark text-light py-5">
        <Container>
          <Row className="align-items-center">

            {/* Texto principal */}
            {/* text-center centra en celulares, text-md-start lo vuelve a poner a la izquierda en PC */}
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold">
                Blockbuster Digital
              </h1>

              <p className="lead">
                Reviví la experiencia de alquilar películas desde tu casa.
                Explorá nuestro catálogo y elegí tus favoritas.
              </p>

              {/* Botón que redirige al catálogo */}
              <Button
                as={Link}
                to="/catalogo"
                variant="warning"
                size="lg"
              >
                Ver Catálogo
              </Button>
            </Col>

            {/* Imagen principal */}
            <Col md={6}>
              <img
                src={imagenPrincipal}
                alt="Imagen principal"
                className="img-fluid rounded"
              />
            </Col>

          </Row>
        </Container>
      </section>

      {/*
        Sección de películas destacadas.
        El .slice obtiene las primeras 4 peliculas del array de productos.js
        Si queremos que se muestren otras ponele que podriamos hacer un const destacadas = ["Poner los ids de las cuatro pelis que queremos."]
        const peliculasDestacadas = productos.filter( pelicula => destacas.includes(pelicula.id))
        Y en la parte de .slice harai algo como:
        {peliculasDestacadas.map((pelicula) => (
      */}
      <section className="py-5">
        <Container>

          <h2 className="text-center mb-4">
            Películas destacadas
          </h2>

          <Row className="align-items-stretch">
            {productos.slice(0, 4).map((pelicula) => (
              <Col key={pelicula.id} md={3} sm={6} className="mb-4">
                {/* Aca no se pasa onAlquilar porque en Inicio no lleva ese botón */}
                <TarjetaPelicula pelicula={pelicula} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/*
        Explicación de cómo funciona el sitio.
      */}
      <section className="bg-light py-5">
        <Container>

          <h2 className="text-center mb-4">
            ¿Cómo funciona?
          </h2>

          <Row>

            <Col md={4} className="text-center">
              <h4>🍿 Elegí</h4>
              <p>Buscá tu película favorita.</p>
            </Col>

            <Col md={4} className="text-center">
              <h4>📼 Agregá</h4>
              <p>Sumala al carrito.</p>
            </Col>

            <Col md={4} className="text-center">
              <h4>🎟️ Confirmá</h4>
              <p>Completá tus datos y finalizá la reserva.</p>
            </Col>

          </Row>
        </Container>
      </section>

      {/* Footer simple */}

      <footer className="bg-dark text-light text-center py-3">
        <p>© 2026 Blockbuster Digital</p>
      </footer>
    </>
  );
}

export default Inicio;



