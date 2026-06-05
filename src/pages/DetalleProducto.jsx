import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Card } from 'react-bootstrap';


import { productos } from '../data/productos'; 

const DetalleProducto = ({agregarAlCarrito}) => {
  const { id } = useParams();
  
  
  const producto = productos.find(p => p.id === parseInt(id));

  
  if (!producto) {
    return (
      <Container className="text-center py-5">
        <h2 className="mb-4">Película no encontrada</h2>
        <Link to="/catalogo">
          <Button variant="primary">Volver al catálogo</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      {/* Usamos una Card grande que envuelve todo para darle un borde limpio y sombra */}
      <Card className="shadow-lg border-0 overflow-hidden">
        <Row className="g-0">
          
          {/* COLUMNA IZQUIERDA: Imagen */}
          <Col md={5} className="bg-dark d-flex align-items-center justify-content-center p-4">
            <img 
              // Si usaste "img" o "portada" en tu array, cámbialo aquí
              src={producto.imagen} 
              alt={producto.titulo} 
              className="img-fluid rounded shadow"
              style={{ maxHeight: '600px', objectFit: 'contain' }}
            />
          </Col>

          {/* COLUMNA DERECHA: Información y Botones */}
          <Col md={7}>
            {/* h-100 y d-flex flex-column nos permiten empujar los botones siempre hacia abajo */}
            <Card.Body className="p-4 p-md-5 d-flex flex-column h-100">
              
              {/* Categoría / Género */}
              <div className="mb-3">
                <Badge bg="info" className="me-2 px-3 py-2 text-uppercase fs-6">
                  {producto.categoria || producto.genero}
                </Badge>
                {producto.stock === 0 && (
                  <Badge bg="danger" className="px-3 py-2 text-uppercase fs-6">
                    Sin stock
                  </Badge>
                )}
              </div>

              {/* Título de la película */}
              <Card.Title as="h1" className="fw-bold mb-3 text-dark display-5">
                {producto.titulo}
              </Card.Title>
              
              {/* Precio */}
              <Card.Text as="h2" className="text-primary fw-bold mb-4">
                ${producto.precio?.toLocaleString('es-AR')}
              </Card.Text>

              {/* Sinopsis / Descripción */}
              <Card.Text className="lead text-secondary mb-4">
                {producto.descripcion || producto.sinopsis}
              </Card.Text>

              {/* Contenedor inferior (Stock y Botones) que se empuja hacia el fondo */}
              <div className="mt-auto border-top pt-4">
                <div className="mb-4">
                  <span className="fw-bold fs-5">
                    Disponibilidad: 
                    {producto.stock > 0 
                      ? <span className="text-success ms-2">{producto.stock} en stock</span>
                      : <span className="text-danger ms-2">No disponible</span>
                    }
                  </span>
                </div>

                {/* Botones */}
                <div className="d-grid gap-3 d-md-flex justify-content-md-start">
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="px-4 py-2 fw-bold"
                    disabled={producto.stock === 0}
                    onClick={() => {

                      const agregado = agregarAlCarrito(producto);

                      if (agregado) {
                        alert('Película agregada al carrito');
                      } else {
                        alert('La película ya está en el carrito');
                      }

                    }}
                  >
                    {producto.stock === 0 ? 'Agotada' : 'Agregar al carrito'}
                  </Button>
                  
                  <Link to="/catalogo">
                    <Button variant="outline-secondary" size="lg" className="px-4 py-2">
                      Volver al catálogo
                    </Button>
                  </Link>
                </div>
              </div>

            </Card.Body>
          </Col>

        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;