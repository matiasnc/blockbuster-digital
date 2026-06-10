import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { productos } from '../data/productos';

function Productos({ agregarAlCarrito }) {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Catálogo de Películas</h2>
      <Row>
        {/* Recorremos el array de películas con .map() */}
        {productos.map((pelicula) => (
          <Col key={pelicula.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
            <Card className="shadow-sm w-100">
              <Card.Img variant="top" src={pelicula.imagen} alt={pelicula.titulo} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{pelicula.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{pelicula.genero}</Card.Subtitle>
                
                {/* Mostramos solo un fragmento de la sinopsis */}
                <Card.Text className="flex-grow-1">
                  {pelicula.sinopsis.substring(0, 80)}...
                </Card.Text>
                
                <h5 className="text-center mb-3">${pelicula.precio}</h5>

                {/* Renderizado condicional basado en el stock */}
                {pelicula.stock === 0 ? (
                  <Button variant="secondary" disabled className="mb-2">
                    Agotado
                  </Button>
                ) : (
                  <Button variant="primary" className="mb-2" onClick={() => {
                    const agregado = agregarAlCarrito(pelicula);
                    if(agregado){
                      alert("Pelicula agregada al carrito.");
                    } else {
                      alert("La pelicula ya está en el carrito.");
                    }
                  }}
                  >
                    Alquilar
                  </Button>
                )}

                {/* Botón para ver el detalle de la película */}
                <Button as={Link} to={`/pelicula/${pelicula.id}`} variant="outline-dark">
                  Ver detalle
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Productos;