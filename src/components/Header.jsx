import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link, NavLink } from 'react-router-dom';

function Header({ carrito }) {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        {/* El logo o marca que lleva al inicio */}
        <Navbar.Brand as={Link} to="/"> Blockbuster Digital</Navbar.Brand>
        
        {/* El botón de menú hamburguesa para celulares */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Los enlaces de navegación */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/catalogo">Catálogo</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
          </Nav>
          
          {/* El carrito a la derecha */}
          <Nav>
            <Nav.Link as={NavLink} to="/carrito">
              🛒 Carrito <Badge bg="warning" text="dark">{carrito.length}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;