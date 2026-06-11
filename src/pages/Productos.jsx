import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { mostrarAlertaCarrito } from '../utils/alertas';

function Productos({ productos, agregarAlCarrito }) {

  // Funcion para manejar alerta con sweetalert2 al agregar un producto al carrito
  const handleAgregar = (pelicula) => {
    const exito = agregarAlCarrito(pelicula);
    mostrarAlertaCarrito(exito, pelicula.titulo);
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Catálogo de Películas</h2>
      <Row className="align-items-stretch">
        {productos.map((pelicula) => (
          <Col key={pelicula.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Link to={`/pelicula/${pelicula.id}`}>
                <Card.Img
                  variant="top"
                  src={pelicula.imagen}
                  alt={pelicula.titulo}
                  style={{ height: '350px', objectFit: 'cover' }}
                />
              </Link>

              <Card.Body className="d-flex flex-column">
                <Card.Title>{pelicula.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{pelicula.genero}</Card.Subtitle>

                <Card.Text>
                  {pelicula.sinopsis.substring(0, 80)}...
                </Card.Text>

                <h5 className="text-center mb-3">${pelicula.precio}</h5>

                <div className="mt-auto d-flex flex-column gap-2">
                  {pelicula.stock === 0 ? (
                    <Button variant="secondary" disabled>
                      Agotado
                    </Button>
                  ) : (
                    <Button
                      variant="dark"
                      // 3. Cambiamos el onClick para que llame a nuestra nueva función
                      onClick={() => handleAgregar(pelicula)}
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