import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header({ carrito, tema, alternarTema }) {
  // Calculamos la cantidad de productos en el carrito para el numerito
  const cantidadCarrito = carrito.length;

  return (
    <Navbar bg={tema === 'light' ? 'light' : 'dark'} variant={tema} expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">🍿 Blockbuster Digital</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>

          <Nav className="align-items-center gap-2">

            <Button
              variant={tema === 'light' ? 'outline-dark' : 'outline-light'}
              onClick={alternarTema}
              title={tema === 'light' ? 'Cambiar a Modo Oscuro' : 'Cambiar a Modo Claro'}
              className="px-3"
            >
              {tema === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
            </Button>

            <Button as={Link} to="/carrito" variant="warning" className="fw-bold">
              🛒 Carrito ({cantidadCarrito})
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;