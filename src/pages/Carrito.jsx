// Todo sobre carrito.

// Mi idea seria mostrar las peliculas seleccionadas para comprar
// Mostrar el total
// Eliminar alguna de las peliculas
// Comprar


import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Carrito({ carrito, eliminarDelCarrito, finalizarCompra }) {

  /*
    Calculamos el total del carrito.

    .reduce() recorre todas las películas y va sumando
    el precio de cada una.
  */
  const total = (carrito || []).reduce(
    (acumulador, pelicula) => acumulador + pelicula.precio,
    0
  );

  /*
    Si el carrito está vacío mostramos un mensaje
    en lugar de la lista de películas.
  */
  if (carrito.length === 0) {
    return (
      <Container className="text-center py-5">
        <h2>Tu carrito está vacío</h2>

        {/* Botón para volver al catálogo */}
        <Button
          as={Link}
          to="/catalogo"
          variant="warning"
          className="mt-3"
        >
          Ir al catálogo
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">

      {/* Título principal */}
      <h2 className="mb-4">
        🛒 Mi Carrito
      </h2>

      {/*
        Recorremos todas las películas que hay
        dentro del carrito utilizando .map()
      */}
      {carrito.map((pelicula) => (

        <Card
          key={pelicula.id}
          className="mb-3 shadow-sm"
        >
          <Card.Body>

            <Row className="align-items-center">

              {/* Imagen de la película */}
              <Col md={2}>
                <img
                  src={pelicula.imagen}
                  alt={pelicula.titulo}
                  className="img-fluid rounded"
                />
              </Col>

              {/* Información principal */}
              <Col md={6}>
                <h5>{pelicula.titulo}</h5>
                <p>{pelicula.genero}</p>
              </Col>

              {/* Precio */}
              <Col md={2}>
                <h5>
                  ${pelicula.precio}
                </h5>
              </Col>

              {/* Botón para quitar una película */}
              <Col md={2}>
                <Button
                  variant="danger"
                  onClick={() =>
                    eliminarDelCarrito(pelicula.id)
                  }
                >
                  Quitar
                </Button>
              </Col>

            </Row>

          </Card.Body>
        </Card>

      ))}

      {/*
        Resumen de la compra.
        Con boton de finalizar compra.
      */}
      <Card className="mt-4 shadow">
        <Card.Body>

          <h3>
            Total: ${total}
          </h3>

          <Button
            variant="success"
            size="lg"
            onClick={finalizarCompra}
          >
            Finalizar compra
          </Button>

        </Card.Body>
      </Card>

    </Container>
  );
}

export default Carrito;