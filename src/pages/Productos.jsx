import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Productos({ productos, agregarAlCarrito }) {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Catálogo de Películas</h2>
      {/* <Row>
        {productos.map((pelicula) => (
          <Col key={pelicula.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
            <Card className="shadow-sm w-100">
              <Card.Img variant="top" src={pelicula.imagen} alt={pelicula.titulo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{pelicula.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{pelicula.genero}</Card.Subtitle>
          
                <Card.Text className="flex-grow-1">
                  {pelicula.sinopsis.substring(0, 80)}...
                </Card.Text>

                <h5 className="text-center mb-3">${pelicula.precio}</h5>

                <p className="text-center">
                  Stock:{pelicula.stock}
                </p>

                {pelicula.stock === 0 ? (
                  <Button variant="secondary" disabled className="mb-2">
                    Agotado
                  </Button>
                ) : (
                  <Button variant="primary" className="mb-2" onClick={() => {
                    const agregado = agregarAlCarrito(pelicula);
                    if (agregado) {
                      alert("Pelicula agregada al carrito.");
                    } else {
                      alert("La pelicula ya está en el carrito.");
                    }
                  }}
                  >
                    Alquilar
                  </Button>
                )}

                <Button as={Link} to={`/pelicula/${pelicula.id}`} variant="outline-dark">
                  Ver detalle
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> 
      */}
      <Row className="align-items-stretch">
        {productos.map((pelicula) => (
          <Col key={pelicula.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            {/* h-100 hace que todas las tarjetas ocupen el 100% del alto de la columna */}
            <Card className="h-100 shadow-sm">

              {/* Imagen clickeable */}
              <Link to={`/pelicula/${pelicula.id}`}>
                <Card.Img
                  variant="top"
                  src={pelicula.imagen}
                  alt={pelicula.titulo}
                  style={{ height: '350px', objectFit: 'cover' }}
                />
              </Link>

              {/* d-flex flex-column para poder empujar el contenido */}
              <Card.Body className="d-flex flex-column">
                <Card.Title>{pelicula.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{pelicula.genero}</Card.Subtitle>

                <Card.Text>
                  {pelicula.sinopsis.substring(0, 80)}...
                </Card.Text>

                <h5 className="text-center mb-3">${pelicula.precio}</h5>

                {/* Contenedor de botones con mt-auto para que queden siempre abajo */}
                <div className="mt-auto d-flex flex-column gap-2">
                  {pelicula.stock === 0 ? (
                    <Button variant="secondary" disabled>
                      Agotado
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      // Asegurate de que la prop agregarAlCarrito esté bien pasada
                      onClick={() => agregarAlCarrito(pelicula)}
                    >
                      Alquilar
                    </Button>
                  )}

                  <Button as={Link} to={`/pelicula/${pelicula.id}`} variant="outline-dark">
                    Ver detalle
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Productos;