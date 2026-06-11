import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// Le pasamos la película y, opcionalmente, la función para agregar al carrito
function TarjetaPelicula({ pelicula, onAlquilar, tema}) {
  return (
    <Card className="h-100 shadow-sm">
      {/* Portada clickeable con la configuración 'contain' centralizada */}
      <Link to={`/pelicula/${pelicula.id}`}>
        <Card.Img
          variant="top"
          src={pelicula.imagen}
          alt={pelicula.titulo}
          style={{
            height: '350px',
            objectFit: 'contain',
            //este color cambia solo según el tema
            backgroundColor: 'var(--bs-tertiary-bg)', padding: '10px'
          }}
        />
      </Link>

      <Card.Body className="d-flex flex-column">
        <Card.Title>{pelicula.titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{pelicula.genero}</Card.Subtitle>

        {/* Mostramos la sinopsis recortada si existe */}
        {pelicula.sinopsis && (
          <Card.Text>
            {pelicula.sinopsis.substring(0, 80)}...
          </Card.Text>
        )}

        {/* El precio solo se muestra si está definido */}
        {pelicula.precio && <h5 className="text-center mb-3">${pelicula.precio}</h5>}

        <div className="mt-auto d-flex flex-column gap-2">
          {/* Si pasamos la prop onAlquilar, significa que estamos en el Catálogo y necesita el botón */}
          {onAlquilar && (
            pelicula.stock === 0 ? (
              <Button variant="secondary" disabled>
                Agotado
              </Button>
            ) : (
              <Button variant="warning" className="fw-bold" onClick={() => onAlquilar(pelicula) }>
                Alquilar
              </Button>
            )
          )}

          <Button
            as={Link}
            to={`/pelicula/${pelicula.id}`}
            // Si el tema es 'dark', usamos 'warning' (amarillo), si es 'light', usamos 'dark' (negro)
            variant={tema === 'light' ? 'dark' : 'warning'}
            // Si es amarillo (modo oscuro), forzamos el texto a negro para que se lea bien
            className={tema === 'light' ? 'fw-bold' : 'text-dark'}
          >
            Ver detalle
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TarjetaPelicula;