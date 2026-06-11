import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { mostrarAlertaCarrito } from '../utils/alertas';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import TarjetaPelicula from '../components/TarjetaPelicula';

function Productos({ productos, agregarAlCarrito }) {

  const [busqueda, setBusqueda] = useState('');
  const [filtroGenero, setFiltroGenero] = useState('');
  const generosUnicos = [...new Set(productos.map(p => p.genero))];

  // Filtrar los productos según la búsqueda y el género seleccionado
  const productosFiltrados = productos.filter((pelicula) => {
    const coincideTexto = pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideGenero = filtroGenero === '' || pelicula.genero === filtroGenero;
    return coincideTexto && coincideGenero;
  });

  // Funcion para manejar alerta con sweetalert2 al agregar un producto al carrito
  const handleAgregar = (pelicula) => {
    const exito = agregarAlCarrito(pelicula);
    mostrarAlertaCarrito(exito, pelicula.titulo);
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Catálogo de Películas</h2>

      <Row className="mb-5 justify-content-center bg-light p-4 rounded shadow-sm">
        <Col md={5} className="mb-3 mb-md-0">
          <Form.Group>
            <Form.Label className="fw-bold">Buscar por título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Matrix, El Padrino..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)} // Actualizamos el estado cada vez que el usuario escribe
            />
          </Form.Group>
        </Col>

        <Col md={5}>
          <Form.Group>
            <Form.Label className="fw-bold">Filtrar por género</Form.Label>
            <Form.Select
              value={filtroGenero}
              // Actualizamos el estado cuando el usuario selecciona una opción
              onChange={(e) => setFiltroGenero(e.target.value)}
            >
              <option value="">Todos los géneros</option>
              {generosUnicos.map((genero, index) => (
                <option key={index} value={genero}>
                  {genero}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="align-items-stretch">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((pelicula) => (
            <Col key={pelicula.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              {/* Pasamos la película y en onAlquilar mapeamos tu función handleAgregar */}
              <TarjetaPelicula
                pelicula={pelicula}
                onAlquilar={handleAgregar}
              />
            </Col>
          ))
        ) : (
          // Mensaje por si la búsqueda no arroja resultados
          <Col xs={12} className="text-center py-5">
            <h4 className="text-muted">No se encontraron películas con esos filtros.</h4>
            <Button
              variant="warning"
              className="mt-3"
              onClick={() => { setBusqueda(''); setFiltroGenero(''); }}
            >
              Limpiar filtros
            </Button>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Productos;