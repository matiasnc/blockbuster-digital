import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productos } from "../data/productos";

function Inicio() {
  return (
    <> {/*esto es React.Fragment, se utiliza para agrupar varias secciones sin agregar un div extra.*/ }
      {/* 
        Sección principal de bienvenida.
        
      */}
      <section className="bg-dark text-light py-5">
        <Container>
          <Row className="align-items-center">

            {/* Texto principal */}
            <Col md={6}>
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
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba" 
                alt="Banner principal"
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

          <Row>
            {productos.slice(0, 4).map((pelicula) => (
              <Col key = {pelicula.id} md = {3} sm = {6} className = "mb-4">
                <Card>
                  <Card.Img
                    variant = "top"
                    src = {pelicula.imagen}
                    alt = {pelicula.titulo}
                  />

                  <Card.Body>
                    <Card.Title>
                     {pelicula.titulo}
                    </Card.Title>

                    <Card.Text>
                      {pelicula.genero}
                    </Card.Text>

                    <Button as={Link} to={`/pelicula/${pelicula.id}`} variant="outline-dark">
                      Ver detalle
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/*
        Explicación sencilla de cómo funciona el sitio.
        
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

      {/* Bueno, un Footer sencillo, no se si lo vamos a cambiar más adelante. */}

      <footer className="bg-dark text-light text-center py-3">
        <p>© 2026 Blockbuster Digital</p>
      </footer>
    </>
  );
}

export default Inicio;



